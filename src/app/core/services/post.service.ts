import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { postsData } from '../data/post-data';
import { PostData } from '../models/post-data.models';

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

  createPost(data: any): void {
    console.log(data);
  }

  editPost(id: number, data: PostData): void {
    const post = this.getPostById(id);
    if (post) {
      post.title = data.title;
      post.post_content = data.post_content;
      post.post_image = data.post_image;
      post.hashtags = data.hashtags;
      console.log('Post edit');
    }
  }
}
