import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default class PasswordValidator {
  static match(
    password: string,
    repeatedPassword: string,
    error: ValidationErrors
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordCtrl: string = control.get(password)?.value; // Coge password de nuestro campo password del formulario
      const repeatedPasswordCtrl: string = control.get(repeatedPassword)?.value; // Coge repeatedPassword de nuestro campo repeatedPassword del formulario
      // console.log(control);
      // compara las dos cosas
      if (passwordCtrl !== repeatedPasswordCtrl) {
        // si no son iguales, saca un error en el form
        control.get('repeatedPassword')?.setErrors(error);
        return error;
      }
      control.get('repeatedPassword')?.setErrors(null);
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
