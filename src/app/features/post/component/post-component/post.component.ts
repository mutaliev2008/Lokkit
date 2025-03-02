import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CutTextPipe } from '../../../../shared/pipes/cut-text.pipe';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/models/post.model';
import { UserNamePipe } from '../../../../shared/pipes/user-name.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-component',
  imports: [CommonModule, CutTextPipe, UserNamePipe, RouterLink],
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  postService = inject(PostService);
  ngOnInit(): void {
    this.postService.getPosts();
  }

  likePost(id: number): void {
    this.postService.likePost(id);
  }
  private commentState: boolean = false;

  get showComments(): boolean {
    return this.commentState;
  }

  toggleComments(): void {
    this.commentState = !this.commentState;
  }
}
