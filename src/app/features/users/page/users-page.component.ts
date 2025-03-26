import { Component, inject } from '@angular/core';
import { UserCardComponent } from '../components/user-card.component';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-page',
  imports: [UserCardComponent, CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent {
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe();
  }
}
