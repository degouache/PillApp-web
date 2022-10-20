import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  registerForm = this.formBuilder.group({
    username: [
      '',
      [
        Validators.required,
        Validators.max(20),
        Validators.pattern(
          '(?=(?:d*[A-Za-z]){1,})(?=(?:[A-Za-z]*d){1,})[A-Za-zd]{8}'
        ),
      ],
    ],
    password: [
      '',
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        '((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]))(?=.*[!@#&()-/$=<>?])[a-zA-Z0-9!@#&()-/$=<>?]+$'
      ),
    ],
    repeatedPassword: [
      '',
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        '((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]))(?=.*[!@#&()-/$=<>?])[a-zA-Z0-9!@#&()-/$=<>?]+$'
      ),
    ],
    email: [
      '',
      [Validators.required, Validators.max(40), Validators.email],
    ],
    checkbox: ['', Validators.required],
  });

  get username() {
    return this.registerForm.controls['username'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }
  get repeatedPassword() {
    return this.registerForm.controls['repeatedPassword'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }
  get checkbox() {
    return this.registerForm.controls['checkbox'];
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required,Validators.max(20),Validators.pattern]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.pattern]],
      repeatedPassword: ['', [Validators.required,Validators.minLength(6),Validators.pattern]],
      email: ['', [Validators.required,Validators.max(40),Validators.email]],
      checkbox: ['', Validators.required],
    });
  }

  registerSubmit(): void {
    const formValue = this.registerForm.value;
    this.submitted = true;
  }

  get registerDataForm() {
    return this.registerForm.controls;
  }
}
