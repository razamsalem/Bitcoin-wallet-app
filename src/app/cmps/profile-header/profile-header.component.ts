import { Component, Input, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  private userService = inject(UserService)
  @Input() title!: string
  user!: User

  ngOnInit(): void {
    // const user = this.userService.getUser();
    this.userService.user$
      .subscribe(user => {
        this.user = user
      })
  }

  // console.log('user', user);

}