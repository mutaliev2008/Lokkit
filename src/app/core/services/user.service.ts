import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {
  BehaviorSubject,
  catchError,
  delay,
  Observable,
  retry,
  tap,
  throwError,
} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URL } from '../api-url';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public readonly users$ = this.usersSubject$.asObservable();
  activeUser: User = {
    id: 65464747458,
    fullName: 'Grace Lee',
    username: 'gracel',
    email: 'grace@example.com',
    password: 'jkl456',
    avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_31.png',
    gender: 'female',
    role: 'user',
    joined: '2023-08-01T00:00:00Z',
    city: 'Seoul',
    story: 'I am a foodie and love cooking new recipes.',
  };

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`).pipe(
      delay(500),
      retry(2),
      tap((res) => {
        this.usersSubject$.next(res);
        console.log(this.usersSubject$.value);
        catchError((error: HttpErrorResponse) => {
          console.error('Не удалось вернуть пользователей', error.error);
          throw error;
        });
      })
    );
  }

  getUserById(id: number | string): Observable<User> {
    return this.http.get<User>(`${API_URL}/users/${String(id)}`).pipe(
      delay(500),
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('Не удалось вернуть пользователей', error.error);
        return throwError(() => new Error('Не удалось вернуть пользователей'));
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${API_URL}/users`, user).pipe(
      delay(500),
      retry(2),
      tap((newUser) => {
        this.usersSubject$.next({ ...this.usersSubject$.value, ...newUser });
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Не удалось создать пользователя', error.error);
        return throwError(() => new Error('Не удалось создать пользователя'));
      })
    );
  }
  deleteUser(id: number | string): Observable<void> {
    const userExists = this.usersSubject$.value.filter(
      (user) => user.id === id
    );

    if (!userExists) {
      return throwError(() => new Error('Пользователь не найден'));
    }

    return this.http.delete<void>(`${API_URL}/users/${String(id)}`).pipe(
      tap(() => {
        const currentUsers = this.usersSubject$.value;
        this.usersSubject$.next(currentUsers.filter((user) => user.id !== id));
      }),
      catchError((error) => {
        console.error('Ошибка удаления:', error);
        return throwError(() => new Error('Не удалось удалить пользователя'));
      })
    );
  }

  updateUser(id: number, updates: Partial<any>): Observable<User> {
    return this.http.patch<User>(`${API_URL}/users/${id}`, updates).pipe(
      delay(500),
      retry(2),
      tap((updatedUser) => {
        const users = this.usersSubject$.value.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        );
        this.usersSubject$.next(users);
      }),
      catchError((error) => {
        console.error('Ошибка обновления:', error);
        return throwError(() => new Error('Не удалось обновить пользователя'));
      })
    );
  }
}
