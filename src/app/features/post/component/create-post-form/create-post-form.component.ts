import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { PostService } from '../../../../core/services/post.service';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-post-form',
  imports: [InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './create-post-form.component.html',
  styleUrl: './create-post-form.component.css',
})
export class CreatePostFormComponent {
  postService = inject(PostService);
  file: string = '';
  createPostForm = new FormGroup({
    image: new FormControl(null),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
    ]),
    tags: new FormArray([]),
  });

  changeFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = URL.createObjectURL(file);
      this.createPostForm.patchValue({
        image: file,
      });
    }
  }

  get tags() {
    return this.createPostForm.get('tags') as FormArray;
  }

  addTeg(): void {
    this.tags.push(new FormControl('', Validators.required));
  }

  closeTag(): void {
    this.tags.removeAt(this.tags.length - 1);
  }

  onSubmit(): void {
    if (this.createPostForm.valid) {
      this.postService.createPost(this.createPostForm.value);
    }
  }
}
