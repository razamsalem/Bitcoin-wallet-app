import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() logout = new EventEmitter<boolean>()

  onLogout() {
    this.logout.emit();
  }

}
