import { Injectable } from '@angular/core';
import { usersData } from '../data/profile-data';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  getAllUsers(): User[] {
    this.users = [...usersData];
    return this.users;
  }
  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
  getActiveUser() {
    return this.users.find((user) => user.isActive);
  }
  updateUser(id: number, userData: Partial<User>) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...userData } : user
    );
    console.log(`Пользователь с id ${id} обновлен.`, this.users);
  }
  switchUser(id: number): void {
    this.users = this.users.map((user) => ({
      ...user,
      isActive: user.id === id,
    }));
  }
}
