import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutTextPipe',
})
export class CutTextPipe implements PipeTransform {
  transform(
    value: string | undefined,
    limit: number = 100,
    trailing: string = '...'
  ): string {
    if (!value) {
      return '';
    }
    return value.length > limit ? value.substring(0, limit) + trailing : value;
  }
}
