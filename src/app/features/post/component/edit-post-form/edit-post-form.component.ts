import { Component, inject } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { CommonModule } from '@angular/common';
import { hashtagValidator } from '../../validators/hashtag-validator';

@Component({
  selector: 'app-edit-post-form',
  imports: [InputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-post-form.component.html',
  styleUrl: './edit-post-form.component.css',
})
export class EditPostFormComponent {
  postService = inject(PostService);
  route = inject(ActivatedRoute);
  postId!: number;
  file: string | undefined = '';

  editPostForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    image: new FormControl('', [Validators.required, Validators.minLength(3)]),
    tags: new FormArray([]),
  });

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
    this.uploadingData();
  }

  editPost() {
    if (this.editPostForm.valid) {
      this.postService.editPost(this.postId, this.editPostForm.value);
    }
  }

  get tags(): FormArray {
    return this.editPostForm.get('tags') as FormArray;
  }
  uploadingData() {
    const post = this.postService.getPostById(this.postId);
    if (post) {
      this.tags.clear();

      if (post.tags) {
        post.tags.forEach((tag) => this.tags.push(new FormControl(tag)));
      }
      this.editPostForm.patchValue({
        title: post.title,
        content: post.content,
        image: post.image,
      });
      this.file = post.image;
    }
  }

  changeFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = URL.createObjectURL(file);
      this.editPostForm.patchValue({
        image: file,
      });
    }
  }
  addTeg(): void {
    this.tags.push(
      new FormControl('', [Validators.required, hashtagValidator()])
    );
  }

  closeTag(index: number) {
    this.tags.removeAt(index);
  }
}
