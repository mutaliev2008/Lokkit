import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from './features/pages/feed-component/feed.component';
import { ProfileComponent } from './features/pages/profile-component/profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeedComponent, ProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lokkit-project';
}
