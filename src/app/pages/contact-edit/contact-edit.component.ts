import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.scss'
})
export class ContactEditComponent {
  contactService = inject(ContactService)
  router = inject(Router)
  contact = this.contactService.getEmptyContact()

  ngOnInit() {

  }

  onSaveContact() {
    this.contactService.saveContact(this.contact as Contact)
      .subscribe({
        next: this.onBack,
        error: err => console.log('err', err)
      })
  }

  onBack = () => {
    this.router.navigateByUrl('/contact')
  }
}
