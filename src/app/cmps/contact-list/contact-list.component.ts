import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  @Input() contacts!: Contact[]

  ngOnInit(): void {
    console.log('Contacts from list!', this.contacts)
  }
}
