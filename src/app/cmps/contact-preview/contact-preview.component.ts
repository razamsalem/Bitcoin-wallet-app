import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {
  @Input() contact!: Contact
  @Output() remove = new EventEmitter()
  constructor(private router: Router) {} 

  onRemoveContact(event: Event) {
    event.stopPropagation()
    this.remove.emit(this.contact._id)
  }

  onEditContact(event: Event) {
    event.stopPropagation()
    this.router.navigate(['/contact/edit', this.contact._id])
  }

}