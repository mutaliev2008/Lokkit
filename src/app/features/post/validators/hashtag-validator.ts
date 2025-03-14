import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function hashtagValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && !value.startsWith('#')) {
      return { hashtag: true };
    }
    return null;
  };
}
