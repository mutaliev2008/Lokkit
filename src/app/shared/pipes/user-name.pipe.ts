import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../../core/models/post.model';

@Pipe({
  name: 'userName',
})
export class UserNamePipe implements PipeTransform {
  transform(value: Post): string {
    if (!value.author.fullName) {
      return '@' + value.author.username;
    }
    return value.author.fullName;
  }
}
