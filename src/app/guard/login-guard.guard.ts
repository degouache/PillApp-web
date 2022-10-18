import { Injectable } from '@angular/core';
import { CanLoad} from '@angular/router';
import { Observable} from 'rxjs';
import { AuthService } from '../pages/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanLoad {
  constructor(private authService: AuthService){}
  canLoad(): Observable<boolean> {
    return this.authService.logedIn;
  }
}
