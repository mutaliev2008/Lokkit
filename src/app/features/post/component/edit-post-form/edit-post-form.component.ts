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
  }

  editPost() {
    if (this.editPostForm.valid) {
      this.postService.editPost(this.postId, {
        title: this.editPostForm.value.title!,
        post_content: this.editPostForm.value.content!,
        post_image: this.editPostForm.value.image!,
        hashtags: this.editPostForm.value.tags || [],
      });
    }
  }

  get tags(): FormArray {
    return this.editPostForm.get('tags') as FormArray;
  }
  uploadingData() {
    const post = this.postService.getPostById(this.postId);
    if (post) {
      this.tags.clear();

      if (post.hashtags) {
        post.hashtags.forEach((tag) => this.tags.push(new FormControl(tag)));
      }
      this.editPostForm.patchValue({
        title: post.title,
        content: post.post_content,
        image: post.post_image,
      });
    }
  }
}
