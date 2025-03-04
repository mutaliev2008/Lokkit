import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from '../profile-info/profile-info.component';
import { ProfileSettingComponent } from '../profile-setting/profile-setting.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-component',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: true,
})
export class ProfileComponent {
  activeButton: string = 'info';

  setActiveButton(button: string): void {
    this.activeButton = button;
  }
}
