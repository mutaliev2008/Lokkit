import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/models/post.model';

@Component({
  selector: 'app-post-details-page',
  imports: [RouterOutlet],
  templateUrl: './post-details-page.component.html',
  styleUrl: './post-details-page.component.css',
})
export class PostDetailsPageComponent {}
