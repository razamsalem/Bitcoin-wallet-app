import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, filter, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.scss'
})
export class ContactEditComponent {
  private contactService = inject(ContactService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  destroySubject$ = new Subject<void>()
  contact = this.contactService.getEmptyContact()

  ngOnInit() {
    this.route.params
      .pipe(
        takeUntil(this.destroySubject$),
        map(params => params['id']),
        filter(id => id),
        switchMap(id => this.contactService.getContactById(id))
      ).subscribe(contact => {
        this.contact = contact
      })
  }

  onSaveContact() {
    this.contactService.saveContact(this.contact as Contact)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe({
        next: this.onBack,
        error: err => console.log('err', err)
      })
  }

  onBack = () => {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.destroySubject$.next()
  }
}
