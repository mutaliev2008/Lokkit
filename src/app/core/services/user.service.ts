import { Injectable } from '@angular/core';
import { usersData } from '../data/profile-data';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  activeUser: User | undefined;
  getAllUsers(): User[] {
    this.users = [...usersData];
    return this.users;
  }
  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
  getActiveUser() {
    this.activeUser = this.users.find((user) => user.isActive);
    return this.activeUser;
  }

  updateUser(id: number, data: any): void {
    const user = this.getUserById(id);
    if (user) {
      user.firstName = data.firstName;
      user.bio = data.bio;
      user.avatar = data.avatar;
      user.lastName = data.lastName;
      user.email = data.email;
    }
  }
  switchUser(id: number): void {
    this.users = this.users.map((user) => ({
      ...user,
      isActive: user.id === id,
    }));
  }
}
