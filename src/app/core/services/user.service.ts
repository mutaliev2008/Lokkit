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
  activeUser: User = {
    id: 123047568,
    fullName: 'Ahmed Gazdiev',
    username: 'ahm_gazdiev',
    email: 'ahm.gazdiev@example.com',
    password: 'abc123',
    avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_23.png',
    gender: 'male',
    role: 'admin',
    joined: '2023-01-01T00:00:00Z',
    city: 'Venna',
    story: 'I love coding and exploring new technologies.',
  };
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public readonly users$ = this.usersSubject$.asObservable();

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`).pipe(
      delay(500),
      retry(2),
      tap((res) => {
        this.usersSubject$.next(res);
        catchError((error: HttpErrorResponse) => {
          console.error('Server returned:', error.error);
          throw error;
        });
      })
    );
  }

  getUserById(id: number) {}

  getActiveUser() {}

  updateUser(id: number, data: any): void {}

  switchUser(id: number): void {}
  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   let errorMessage: string;

  //   if (error.error instanceof ErrorEvent) {
  //     // Клиентская ошибка или ошибка сети
  //     errorMessage = `Клиентская ошибка: ${error.error.message}`;
  //   } else if (error.status === 0) {
  //     // Ошибка соединения (например, нет интернета)
  //     errorMessage =
  //       'Нет соединения с сервером. Проверьте подключение к интернету.';
  //   } else {
  //     // Серверная ошибка
  //     errorMessage = `Серверная ошибка: ${error.status}\nСообщение: ${
  //       error.message
  //     }\nДетали: ${error.error?.message || 'Нет дополнительной информации'}`;
  //   }

  //   // Логирование ошибки в консоль (или отправка на сервер для анализа)
  //   console.error('Произошла ошибка:', errorMessage, error);

  //   // Возвращаем ошибку как Observable
  //   return throwError(() => new Error(errorMessage));
  // }
}
