import { Injectable } from '@angular/core';
import { usersData } from '../data/profile-data';
import { TUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: TUser[] = usersData;

  getAllUsers(): TUser[] {
    return this.users;
  }
  getUserById(id: number): TUser | undefined {
    return this.users.find((user) => user.id === id);
  }
  // getActiveUser() {
  //   return this.users[0];
  // }
  updateUser(id: number, userData: Partial<TUser>) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...userData } : user
    );
    console.log(`Пользователь с id ${id} обновлен.`, this.users);
  }
  switchUser() {
    this.users = this.users.reverse();
    return this.users;
  }
}
