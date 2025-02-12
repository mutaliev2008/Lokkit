import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';
import { CommonModule } from '@angular/common';
import { ActiveButtonColorDirective } from '../../../shared/directives/active-button-color.directive';

@Component({
  selector: 'app-profile-component',
  imports: [CommonModule, ActiveButtonColorDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: true,
})
export class ProfileComponent implements OnInit {
  userService = inject(UserService);
  activeUser: User | undefined;

  ngOnInit(): void {
    this.userService.getAllUsers();
    this.activeUser = this.userService.getActiveUser();
  }

  setActiveUser(id: number): void {
    this.userService.switchUser(id);
    this.activeUser = this.userService.getActiveUser();
  }
}
