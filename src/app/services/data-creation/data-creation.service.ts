import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrugActionData, DrugPlanData, MeetingData } from 'src/app/shared/models/data-creation.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

//TO DO: CORREGIR INTERFACE

export class DataCreationService {
  constructor(private http: HttpClient) {}

  public registerMeeting(
    meetingData: MeetingData
  ): Observable<MeetingData | void> {
    return this.http.post<MeetingData>(
      `${environment.API_URL}/meeting`,
      meetingData
    );
  }

  public registerDrugAction(
    drugAction: DrugActionData
  ): Observable<DrugActionData | void> {
    return this.http.post<DrugActionData>(
      `${environment.API_URL}/drug/action`,
      drugAction
    );
  }

  public registerDrugPlan(
    drugPlan: DrugPlanData
  ): Observable<DrugPlanData | void> {
    return this.http.post<DrugPlanData>(
      `${environment.API_URL}/drug`,
      drugPlan
    );
  }

}
