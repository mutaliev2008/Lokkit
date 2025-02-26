import { Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActiveButtonColorDirective } from '../../../../shared/directives/active-button-color.directive';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-profile-component',
  imports: [CommonModule, ActiveButtonColorDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: true,
})
export class ProfileComponent implements OnInit {
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getAllUsers();
    this.userService.getActiveUser();
  }

  setActiveUser(id: number): void {
    this.userService.switchUser(id);
    this.userService.getActiveUser();
  }
}
