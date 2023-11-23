import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {
  @Input() contact!: Contact

}