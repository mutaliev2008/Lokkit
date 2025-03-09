import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = true;
  router = inject(Router);

  loginUser(data: unknown) {
    console.log(data);
    this.router.navigate(['feed']);
    this.isLoggedIn = true;
  }

  registerUser(data: unknown) {
    console.log(data);
    this.router.navigate(['feed']);
    this.isLoggedIn = true;
  }

  logoutUser() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
