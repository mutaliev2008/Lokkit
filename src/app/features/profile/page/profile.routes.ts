import { Routes } from '@angular/router';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';

export const profileRoutes: Routes = [
  { path: 'info', component: ProfileInfoComponent },
  { path: 'setting', component: ProfileSettingComponent },
];
