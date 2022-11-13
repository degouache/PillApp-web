import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientData } from 'src/app/shared/models/patient.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeCardService {

  constructor(private http:HttpClient) { }

public getUserData(patientData: PatientData): Observable<PatientData | void> {
    return this.http.post<PatientData>(`${environment.API_URL}/`, patientData); 
  }
}
