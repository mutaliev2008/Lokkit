import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { postsData } from '../data/post-data';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = postsData;

  getPosts(): Post[] {
    this.posts = [...postsData];
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
}
