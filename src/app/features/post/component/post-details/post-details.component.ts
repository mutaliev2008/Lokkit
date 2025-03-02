import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/models/post.model';
@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  postService = inject(PostService);
  post!: Post | undefined;
  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getPostById(Number(postId));
    console.log(this.post);
  }
}
