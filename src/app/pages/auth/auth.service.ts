import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, pipe, throwError } from 'rxjs';
import { UserResponse } from 'src/app/shared/models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';


const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { 
    this.readToken();
  }

  get log(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

login(authData:UserResponse):Observable<UserResponse | void>{
  return this.http
  .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
  .pipe(
    map((response:UserResponse)=> {
      console.log('Response->', response)
      this.saveToken(response.token);
      this.loggedIn.next(true);
      return response;
    }),
    catchError((error) => this.handlerError(error))
  )
}




logout():void{
  localStorage.removeItem('token');
  this.loggedIn.next(false);
}

private readToken():void{
  const userToken = localStorage.getItem('token');
  const isExpired = helper.isTokenExpired(userToken!); //REVISAR ESTO!!!!!!!!!
  isExpired ? this.logout : this.loggedIn.next(true);
}



private saveToken(token:string):void{
  localStorage.setItem('token' , token);
}

private handlerError(error:any): Observable<never>{
  let errorMessage = 'An error happend retrienving data';
  if (error){
    errorMessage = `Error: code ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}