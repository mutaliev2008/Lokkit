import { Component } from '@angular/core';
import { PostComponent } from '../../../shared/components/post-component/post.component';

@Component({
  selector: 'app-feed-component',
  imports: [PostComponent],
  standalone: true,
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {}
