import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authSvc: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  ngOnInit(): void {
  }
  onLogin(): void {
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe((response) => {
      if (response) {
        this.router.navigate(['home']);
      } else {
        console.log('no hay login');
      }
    });
  }
}
