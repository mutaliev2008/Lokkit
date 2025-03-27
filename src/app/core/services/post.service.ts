import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  delay,
  Observable,
  retry,
  tap,
  throwError,
} from 'rxjs';
import { API_URL } from '../api-url';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsSubject$ = new BehaviorSubject<Post[]>([]);
  public readonly posts$ = this.postsSubject$.asObservable();
  private readonly http = inject(HttpClient);
  router = inject(Router);
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API_URL}/posts`).pipe(
      tap((res) => {
        this.postsSubject$.next(res);
      })
    );
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/posts/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Не удалось вернуть пользователей', error.error);
        return throwError(() => new Error('Не удалось вернуть пользователей'));
      })
    );
  }

  // likePost(postId: number): void {}

  createPost(post: Partial<Post>): Observable<Post[]> {
    return this.http.post<Post[]>(`${API_URL}/posts`, post).pipe(
      tap((newPost) => {
        this.postsSubject$.next({ ...this.postsSubject$, ...newPost });
      })
    );
  }

  updatePost(id: number, post: Partial<Post>): Observable<Post[]> {
    return this.http.patch<Post[]>(`${API_URL}posts/${id}`, post).pipe(
      tap((modifiedPost) => {
        this.postsSubject$.next({ ...this.postsSubject$, ...modifiedPost });
      })
    );
  }
  deletePost(id: number): Observable<Post[]> {
    return this.http.delete<Post[]>(`${API_URL}/posts/${id}`).pipe(
      tap((res) => {
        this.postsSubject$.next(res);
      })
    );
  }
}
