import { Component, OnInit, inject } from '@angular/core';
import { ContactFilter } from '../../models/contact.model';
import { Subscription, filter } from 'rxjs';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.scss'
})
export class ContactFilterComponent implements OnInit {
  contactService = inject(ContactService)
  subscriptions!: Subscription
  filterBy!: ContactFilter

  ngOnInit(): void {
    this.contactService.filterBy$
      .subscribe(filterBy => {
        this.filterBy = filterBy
      })
  }

  onSetFilter(val: string) {
    this.contactService.setFilterBy(this.filterBy)
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe?.()
  }
}
