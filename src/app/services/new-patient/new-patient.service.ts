import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewPatientService {

  constructor( private http:HttpClient) { }

  // public register(authData: PatientCreation): Observable<PatientCreation | void> {
  //   return this.http.post<PatientCreation>(`${environment.API_URL}/patient`, authData);
}
