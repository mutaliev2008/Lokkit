import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../../core/models/post.model';

@Pipe({
  name: 'userName',
})
export class UserNamePipe implements PipeTransform {
  transform(value: Post): string {
    if (!value.firstName || !value.secondName) {
      return '@' + value.userName;
    }
    return value.firstName + ' ' + value.secondName;
  }
}
