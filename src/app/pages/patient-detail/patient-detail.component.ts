import { Component, OnInit } from '@angular/core';
import {PatientDetailCardService} from "../../services/patient-detail-card/patient-detail-card.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BehaviorSubject, Subscription} from "rxjs";
import {DataObject} from "../../shared/models/patient.interface";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  public itemsPatient: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesPatient: DataObject[] = [];
  public itemsMeeting: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesMeeting: DataObject[] = [];
  public itemsDrug: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesDrug: DataObject[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardService: PatientDetailCardService
  ) { }

  private paramSub!: Subscription;
  ngOnInit() {
    this.paramSub = this.activatedRoute.paramMap
      .subscribe( (params: ParamMap) => {
        let paramStr = params.get('id');
        if (paramStr != null) {
          this.loadDataForPatient(Number.parseInt(paramStr));
        }
    });
  }
  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

  loadDataForPatient(patientId: number) {
    this.cardService.getUserData().subscribe((patientData) => {
      for (const update of patientData.updates) {
        if (update.type == 'patient' && update.data.id == patientId) {
          update.data.firstLetter = this.getFirstLetter(update.data.fullName);
          this.valuesPatient.push(update.data);
          this.itemsPatient.next(this.valuesPatient);
        }
        else if (update.type == 'meeting' && update.data.patientId == patientId) {
          update.data.date = this.transformTime(update.data.appointmentTimestamp);
          update.data.fullName = this.getPatientName(update.data.patientId);
          this.valuesMeeting.push(update.data);
          this.itemsMeeting.next(this.valuesMeeting);
        }
        else if (update.type == 'drug' && update.data.patientId == patientId) {
          update.data.date = this.transformTime(update.data.reminderTimestamp);
          update.data.fullName = this.getPatientName(update.data.patientId);
          this.valuesDrug.push(update.data);
          this.itemsDrug.next(this.valuesDrug);
        }
      }
    });
  }

  private getFirstLetter(fullName: string): string {
    return fullName.charAt(0).toUpperCase();
  }
  private transformTime(appointmentTimestamp: number): Date{
    var epoch = appointmentTimestamp;
    var date = new Date(0);
    date.setUTCSeconds(epoch);
    return date;
  }

  private getPatientName(id: number): string {
    var fullName = "";
    this.valuesPatient.forEach((patient, index)=> {
      if(id == patient.id){
        fullName = patient.fullName;
      }
    });
    return fullName;
  }

}
