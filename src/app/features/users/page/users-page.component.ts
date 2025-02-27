import { Component, inject } from '@angular/core';
import { UserCardComponent } from '../components/user-card.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-users-page',
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent {
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getAllUsers();
  }
}
