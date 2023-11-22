import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {
  @Input() selectedContact!: Contact
  @Output() unSelectedContact = new EventEmitter<void>()

  onSelectedContact(): void {
    this.unSelectedContact.emit()
  }
}
