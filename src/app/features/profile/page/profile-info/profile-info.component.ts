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

@Component({
  selector: 'app-profile-info',
  imports: [InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
})
export class ProfileInfoComponent {
  userService = inject(UserService);
  ngOnInit(): void {
    this.userService.getAllUsers();
    this.userService.getActiveUser();
    this.uploadingData();
  }

  profileInfoForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
      OnlyLettersValidator(),
    ]),
    lastName: new FormControl('', [
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

  uploadingData() {
    if (this.userService.activeUser) {
      this.profileInfoForm.patchValue({
        firstName: this.userService.activeUser.firstName,
        lastName: this.userService.activeUser.lastName,
        email: this.userService.activeUser.email,
        bio: this.userService.activeUser.bio,
        avatar: this.userService.activeUser.avatar,
      });
    }
  }

  updateProfile() {
    if (this.profileInfoForm.valid) {
      this.userService.updateUser(this.userService.activeUser!.id, {
        firstName: this.profileInfoForm.value.firstName!,
        lastName: this.profileInfoForm.value.lastName!,
        email: this.profileInfoForm.value.email!,
        bio: this.profileInfoForm.value.bio!,
        avatar: this.profileInfoForm.value.avatar!,
      });
      this.uploadingData();
    }
  }
}
