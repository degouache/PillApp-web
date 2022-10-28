import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default class PasswordValidator {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const controlPassword = controls.get(controlName);
      const controlRepeatedPassword = controls.get(checkControlName);

      // if (controlRepeatedPassword?.errors && !controlRepeatedPassword.errors['matching']) {
      //   return null;
      // }
      if (controlPassword?.value !== controlRepeatedPassword?.value) {
        // controlRepeatedPassword?.setErrors({ matching: true });
        return { matching: true };
      }
      return null;
    };
  }
  
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (
      control: AbstractControl
    ): { [key: string]: ValidationErrors } | null => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
}
//123Amm-