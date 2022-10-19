import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  pipe,
  throwError,
} from 'rxjs';
import { UserResponse, UserRegister } from 'src/app/shared/models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  get log(): Observable<boolean> {
    return this.logedIn.asObservable();
  }


//Login methods 


  login(authData: UserResponse): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.API_URL}/pages/login`, authData)
      .pipe(
        map((response: UserResponse) => {
          console.log('Response->', response);
          this.saveToken(response);
          this.logedIn.next(true);
          return response;
        }),
        catchError((error) => this.handlerError(error))
      );
  }

  logout(): void {
    localStorage.removeItem('userResponse');
    this.logedIn.next(false);
    this.router.navigate(['/login']);
  }

  readToken(): string {
    let token = '';
    const userResponse = localStorage.getItem('userResponse');
    if (!!userResponse) {
      const user = JSON.parse(userResponse) as UserResponse;
      const isExpired = helper.isTokenExpired(user.token as string);
      isExpired ? this.logout : this.logedIn.next(true);
      token = user.token;
    }
    return token;
  }

  private saveToken(token: UserResponse): void {
    localStorage.setItem('userResponse', JSON.stringify(token));
  }

  private handlerError(error: any): Observable<never> {
    let errorMessage = 'An error happend retrienving data';
    if (error) {
      errorMessage = `Error: code ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

//register methods

register(authData: UserRegister): Observable<UserRegister | void> {
  return this.http
  .post<UserRegister>(`${environment.API_URL}/pages/register`, authData);
}
}
