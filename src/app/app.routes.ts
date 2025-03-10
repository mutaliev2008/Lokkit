import { Routes } from '@angular/router';
import { FeedComponent } from './features/post/pages/feed-component/feed.component';
import { UsersPageComponent } from './features/users/page/users-page.component';
import { ProfileComponent } from './features/profile/page/profile-component/profile.component';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/login/pages/login.component';
import { RegisterComponent } from './features/register/pages/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full',
  },
  { path: 'feed', component: FeedComponent, canActivate: [authGuard] },
  { path: 'users', component: UsersPageComponent, canActivate: [authGuard] },
  {
    path: 'profile/:userId',
    component: ProfileComponent,
    loadChildren: () =>
      import('./features/profile/page/profile.routes').then(
        (a) => a.profileRoutes
      ),
    canActivate: [authGuard],
  },

  {
    path: 'post',
    loadChildren: () =>
      import('./features/post/pages/post.routes').then((a) => a.postRoutes),
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
