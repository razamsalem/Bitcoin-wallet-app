import { Component, Input, inject  } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  private userService = inject(UserService)
  @Input() title!: string
  userName: string = ''

  ngOnInit(): void {
    const user = this.userService.getUser();
    this.userName = user.name;
  }
}
