import { Component, inject } from '@angular/core';
import { PostComponent } from '../../component/post-component/post.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../../core/services/post.service';

@Component({
  selector: 'app-feed-component',
  imports: [PostComponent, CommonModule],
  standalone: true,
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {
  postService = inject(PostService);
}
