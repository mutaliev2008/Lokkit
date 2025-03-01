import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './features/post/pages/feed-component/feed.component';
import { ProfileComponent } from './features/profile/page/profile-component/profile.component';
import { RegisterFormComponent } from './features/register/components/register-form.component';
import { LoginFormComponent } from './features/login/components/login-form.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SuggestionComponent } from './features/insights/suggestion.component';
import { UsersPageComponent } from './features/users/page/users-page.component';
import { ProfileSettingComponent } from './features/profile/page/profile-setting/profile-setting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FeedComponent,
    ProfileComponent,
    CommonModule,
    LoginFormComponent,
    RegisterFormComponent,
    SidebarComponent,
    HeaderComponent,
    SuggestionComponent,
    UsersPageComponent,
    ProfileSettingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lokkit-project';
}
