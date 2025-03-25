import { Component, inject } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { InputComponent } from '../../../../shared/components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnlyLettersValidator } from '../../validators/only-letters-validator';
import { switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile-info',
  imports: [InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
})
export class ProfileInfoComponent {
  userService = inject(UserService);
  ngOnInit(): void {
    this.userService.getUsers().subscribe();
    this.profileInfoForm.patchValue({
      fullName: this.userService.activeUser.fullName,
      username: this.userService.activeUser.username,
      email: this.userService.activeUser.email,
      bio: this.userService.activeUser.story,
      avatar: this.userService.activeUser.avatar,
    });
  }

  profileInfoForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
      OnlyLettersValidator(),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
      OnlyLettersValidator(),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    bio: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(150),
    ]),
    avatar: new FormControl(''),
  });

  updateProfile() {
    if (this.profileInfoForm.valid) {
      this.userService
        .updateUser(this.userService.activeUser!.id, this.profileInfoForm.value)
        .subscribe();
    }
  }
}
