import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { Observable, lastValueFrom, map, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Move } from '../../models/move';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {
  private contactService = inject(ContactService)
  private userService = inject(UserService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  title: string = ''
  contact: Contact | null = null
  contact$!: Observable<Contact>

  async ngOnInit(): Promise<void> {
    this.contact$ = this.route.data.pipe(map(data => data['contact']))
    // this.contact$ = this.route.params.pipe(
    //   switchMap(params => this.contactService.getContactById(params['id']))
    // )

    this.route.params.subscribe(async params => {
      const id = params['id']
      const contact = await lastValueFrom(this.contactService.getContactById(id))
      this.contact = contact
      this.title = this.contact.name
    })
  }

  async moveCoins() {
    const move: Move = {
      toId: this.contact!._id,
      to: this.contact!.name,
      at: Date.now(),
      amount: 2
    }

    this.userService.moveFunds(move)
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
