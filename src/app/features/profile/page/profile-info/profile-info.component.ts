import { Component, inject } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-profile-info',
  imports: [InputComponent],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
})
export class ProfileInfoComponent {
  userService = inject(UserService);
  ngOnInit(): void {
    this.userService.getAllUsers();
    this.userService.getActiveUser();
  }
}
