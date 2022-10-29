import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default class PasswordValidator {

  static match(control: AbstractControl) {
    const password: string = control.get('password')?.value; // Coge password de nuestro campo password del formulario
    const repeatedPassword: string = control.get('repeatedPassword')?.value; // Coge repeatedPassword de nuestro campo repeatedPassword del formulario
    // compara las dos cosas
    if (password !== repeatedPassword) {
      // si no son iguales, saca un error en el form
      // control.get('repeatedPassword').setErrors({ NoPassswordMatch: true });
    }
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