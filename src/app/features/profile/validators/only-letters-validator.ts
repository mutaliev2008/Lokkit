import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function OnlyLettersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const regex = /^[A-Za-zА-Яа-я\s-]+$/;
    if (!regex.test(value)) {
      return { lettersOnly: true };
    }
    return null;
  };
}
