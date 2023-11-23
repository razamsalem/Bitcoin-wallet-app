import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { Observable, lastValueFrom, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {
  private contactService = inject(ContactService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  contact: Contact | null = null
  contact$!: Observable<Contact>

  async ngOnInit(): Promise<void> {

    // this.contact$ = this.route.params.pipe(
    //   switchMap(params => this.contactService.getContactById(params['id']))
    // )

    this.route.params.subscribe(async params => {
      const id = params['id']
      const contact = await lastValueFrom(this.contactService.getContactById(id))
      this.contact = contact
    })
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
