import { Component } from '@angular/core';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-create-post-form',
  imports: [InputComponent],
  templateUrl: './create-post-form.component.html',
  styleUrl: './create-post-form.component.css',
})
export class CreatePostFormComponent {}
