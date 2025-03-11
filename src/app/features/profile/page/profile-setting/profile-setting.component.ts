import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-profile-setting',
  imports: [FormsModule, InputComponent],
  templateUrl: './profile-setting.component.html',
  styleUrl: './profile-setting.component.css',
})
export class ProfileSettingComponent implements OnInit {
  isChecked: boolean = false;
  inputValue: string = '';

  ngOnInit(): void {
    this.getIsChecked();
  }

  getIsChecked(): boolean {
    return this.isChecked;
  }

  toggleChange(): void {
    this.isChecked = !this.isChecked;
  }
}
