import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  router = inject(Router);
  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }

  likePost(postId: number): void {
    const post = this.getPostById(postId);
    if (post) {
      post.likes++;
    }
  }

  createPost(data: any, activeUser: User): void {}

  editPost(id: number, data: any): void {}
}
