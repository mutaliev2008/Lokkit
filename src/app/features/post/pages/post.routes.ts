import { Routes } from '@angular/router';
import { PostDetailsPageComponent } from './post-details-page/post-details-page.component';
import { PostDetailsComponent } from '../component/post-details/post-details.component';

export const postRoutes: Routes = [
  { path: ':id/details', component: PostDetailsComponent },
];
