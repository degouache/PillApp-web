import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, pipe, throwError } from 'rxjs';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

login(authData:UserResponse):Observable<UserResponse | void>{
  return this.http
  .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
  .pipe(
    map((res:UserResponse)=> {
      console.log('Res->', res)
      //saveToken()
    }),
    catchError((error) => this.handlerError(error))
  )
}




logout():void{}
private readToken():void{}
private saveToken():void{}
private handlerError(error:any): Observable<never>{
  let errorMessage = 'An error happend retrienving data';
  if (error){
    errorMessage = `Error: code ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}
