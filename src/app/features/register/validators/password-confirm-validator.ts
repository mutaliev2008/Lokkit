import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const validatePasswordConfirm: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const form = control as FormGroup;
  if (form.value.password === form.value.confirmPassword) {
    return null;
  }
  return { passwordNotSame: true };
};
