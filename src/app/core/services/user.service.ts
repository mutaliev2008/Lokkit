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
  updateUser(id: number, userData: Partial<User>) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...userData } : user
    );
  }
  switchUser(id: number): void {
    this.users = this.users.map((user) => ({
      ...user,
      isActive: user.id === id,
    }));
  }
}
