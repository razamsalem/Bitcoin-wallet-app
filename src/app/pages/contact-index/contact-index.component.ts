import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrl: './contact-index.component.scss'
})
export class ContactIndexComponent implements OnInit {
  contactService = inject(ContactService)
  contacts!: Contact[]

  ngOnInit(): void {
    this.contactService.contacts$
      .subscribe(contacts => this.contacts = contacts)
  }
}