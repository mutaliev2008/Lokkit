import { Component } from '@angular/core';
import { CreatePostFormComponent } from '../../component/create-post-form/create-post-form.component';

@Component({
  selector: 'app-create-post',
  imports: [CreatePostFormComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {}
