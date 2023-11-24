import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrl: './contact-index.component.scss'
})
export class ContactIndexComponent implements OnInit {
  title = 'Contacts'
  contactService = inject(ContactService)
  selectedContact: Contact | null = null;
  contacts!: Contact[]

  ngOnInit(): void {
    this.contactService.contacts$
      .subscribe(contacts => this.contacts = contacts)
  }

  onSelectedContact(contact: Contact): void {
    this.selectedContact = contact;
  }

  onUnSelectedContact(): void {
    this.selectedContact = null;
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
        .subscribe({
            error: err => console.log('err:', err)
        })
}

}