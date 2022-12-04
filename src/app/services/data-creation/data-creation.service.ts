import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataObject } from 'src/app/shared/models/patient.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataCreationService {
  constructor(private http: HttpClient) {}

  public registerMeeting(
    meetingData: DataObject
  ): Observable<DataObject | void> {
    return this.http.post<DataObject>(
      `${environment.API_URL}/meeting`,
      meetingData
    );
  }

  public registerDrugActiont(
    drugAction: DataObject
  ): Observable<DataObject | void> {
    return this.http.post<DataObject>(
      `${environment.API_URL}/drugAction`,
      drugAction
    );
  }

  public registerDrugPlan(
    drugPlan: DataObject
  ): Observable<DataObject | void> {
    return this.http.post<DataObject>(
      `${environment.API_URL}/drug`,
      drugPlan
    );
  }

}
