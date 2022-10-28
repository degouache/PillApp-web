import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import PasswordValidator from '../../utils/password-validator';


const MINLENGHTPASSWORD = 6;
const MAXLENGHTUSERNAME = 20;
const MAXLENGHTEMAIL = 40;
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?=\S+$).*$/;
const USERNAME_PATTERN =  /^\w*$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  constructor(
    private authSvc: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  registerForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.maxLength(MAXLENGHTUSERNAME),
      PasswordValidator.patternValidator(USERNAME_PATTERN , { hasNumberandLetter: true })
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(MINLENGHTPASSWORD),
      PasswordValidator.patternValidator(PASSWORD_PATTERN , { hasSpecialCharacters: true })
      // Validators.pattern(PASSWORD_PATTERN)
    ]),
    repeatedPassword: new FormControl('', [
      Validators.required,
      PasswordValidator.match("password", "repeatedPassword")
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(MAXLENGHTEMAIL),
      Validators.email,
    ]),
    checkbox: new FormControl('false', Validators.required),
  });

  get userName(): AbstractControl {
    return this.registerForm.controls['userName'];
  }

  get password(): AbstractControl {
    return this.registerForm.controls['password'];
  }
  get repeatedPassword(): AbstractControl {
    return this.registerForm.controls['repeatedPassword'];
  }

  get email(): AbstractControl {
    return this.registerForm.controls['email'];
  }
  get checkbox(): AbstractControl {
    return this.registerForm.controls['checkbox'];
  }
  

  ngOnInit(): void {
    // this.registerForm = this.formBuilder.group({
    //   userName: [
    //     '',
    //     [Validators.required, Validators.maxLength(MAXLENGHTUSERNAME), Validators.pattern(USERNAME_PATTERN)],
    //   ],
    //   password: [
    //     '',
    //     [Validators.required, Validators.minLength(MINLENGHTPASSWORD), Validators.pattern(PASSWORD_PATTERN)],
    //   ],
    //   repeatedPassword: [
    //     '',
    //     [Validators.required, PasswordValidator.match("password", "repeatedPassword")],
    //   ],
    //   email: [
    //     '',
    //     [Validators.required, Validators.maxLength(MAXLENGHTEMAIL), Validators.email],
    //   ],
    //   checkbox: ['', Validators.requiredTrue]}
    //   );
  }

  registerSubmit(): void {
    const formValue = this.registerForm.value;
    this.submitted = true;
    this.onReset();
  }

  get registerDataForm() {
    return this.registerForm.controls;
  }
  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}

