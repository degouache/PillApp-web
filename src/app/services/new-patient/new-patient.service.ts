import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientRegister } from 'src/app/shared/models/patient.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewPatientService {
  
  constructor( private http:HttpClient) { }

  public registerPatient(authData: PatientRegister): Observable<PatientRegister | void> {
    return this.http.post<PatientRegister>(`${environment.API_URL}/patient`, authData); 
  }

}
