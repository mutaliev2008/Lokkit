import { Component, inject, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/models/user.model';
import { SubscribeActiveButtonDirective } from '../../../shared/directives/subscribe-active-button.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule, SubscribeActiveButtonDirective],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() user!: User;
  buttonState: boolean = false;
  users!: any;

  userService = inject(UserService);
  ngOnInit(): void {
    this.users = this.userService.getAllUsers().subscribe();
  }

  toggleButton(): void {
    this.buttonState = !this.buttonState;
  }
}
