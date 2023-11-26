import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Subscription, take } from 'rxjs';
import { showSuccessMsg, showErrorMsg } from '../../app/services/event-bus.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // constructor(private contactService: ContactService) { }
  private contactService = inject(ContactService)
  subscription!: Subscription
  isLogin = false

  ngOnInit() {

    const storedLoginState = localStorage.getItem('isLogin')
    this.isLogin = storedLoginState === 'true'

    this.subscription = this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => console.log('err', err)
      })
  }

  onLogin() {
    this.isLogin = true
    localStorage.setItem('isLogin', 'true')
  }

  onLogout() {
    this.isLogin = false
    localStorage.removeItem('isLogin')
  }
}
