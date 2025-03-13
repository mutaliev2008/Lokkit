import { Routes } from '@angular/router';
import { PostDetailsComponent } from '../component/post-details/post-details.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

export const postRoutes: Routes = [
  { path: ':id/details', component: PostDetailsComponent },
  { path: 'create', component: CreatePostComponent },
  { path: ':id/edit', component: EditPostComponent },
];
