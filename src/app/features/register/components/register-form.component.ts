import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  authService = inject(AuthService);
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.registerUser(this.registerForm.value);
    }
  }
}
