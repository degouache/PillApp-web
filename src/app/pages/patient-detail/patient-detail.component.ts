import {Component, OnInit} from '@angular/core';
import {PatientDetailCardService} from '../../services/patient-detail-card/patient-detail-card.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BehaviorSubject, Subscription} from 'rxjs';
import {DataObject} from '../../shared/models/patient.interface';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent implements OnInit {

  public itemsPatient: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesPatient: DataObject[] = [];
  public itemsMeeting: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesMeeting: DataObject[] = [];
  public itemsDrug: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesDrug: DataObject[] = [];
  public itemsVital: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesVital: DataObject[] = [];
  public itemsDrugTake: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesDrugTake: DataObject[] = [];
  public itemsVitalTake: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesVitalTake: DataObject[] = [];


  private patientId: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardService: PatientDetailCardService
  ) {
  }

  private paramSub!: Subscription;

  ngOnInit() {
    this.paramSub = this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        let paramStr = params.get('id');
        if (paramStr != null) {
          this.patientId = Number.parseInt(paramStr);
          this.loadDataForPatient(this.patientId);
          this.loadFakeDataForPatient(); // hardcoded data that is not in the API
        }
      }
    );
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
        } else if (
          update.type == 'meeting' &&
          update.data.patientId == patientId
        ) {
          update.data.date = this.transformTime(
            update.data.appointmentTimestamp
          );
          update.data.fullName = this.getPatientName(update.data.patientId);
          this.valuesMeeting.push(update.data);
          this.itemsMeeting.next(this.valuesMeeting);
        } else if (
          update.type == 'drug' &&
          update.data.patientId == patientId
        ) {
          update.data.date = this.transformTime(update.data.reminderTimestamp);
          update.data.fullName = this.getPatientName(update.data.patientId);
          this.valuesDrug.push(update.data);
          this.itemsDrug.next(this.valuesDrug);
        } else if (
          update.type == 'drugAction' &&
          update.data.patientId == patientId
        ) {
          update.data.date = this.transformTime(update.data.doneTimestamp);
          update.data.fullName = this.getPatientName(update.data.patientId);
          this.valuesDrugTake.push(update.data);
          this.itemsDrugTake.next(this.valuesDrugTake);
        }
      }
    });
  }

  loadFakeDataForPatient() {  // hardcoded data that is not in the API
    const EIGHT_HOURS = 60*60*8;
    const NOW = new Date().getTime() / 1000;
    const TIME1 = NOW - EIGHT_HOURS;
    const TIME2 = TIME1 - EIGHT_HOURS;
    const TIME3 = TIME2 - EIGHT_HOURS;
    const TIME4 = TIME3 - EIGHT_HOURS;

    this.valuesVital.push(JSON.parse(`{"vitalId": 1, "description": "Temperatura", "period": ${EIGHT_HOURS}}`));
    this.valuesVital.push(JSON.parse(`{"vitalId": 2, "description": "Ritmo cardiaco", "period": ${EIGHT_HOURS}}`));
    this.valuesVital.push(JSON.parse(`{"vitalId": 3, "description": "Tensión arterial", "period": ${EIGHT_HOURS}}`));
    this.itemsVital.next(this.valuesVital);

    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37º", "actionTimestamp": ${TIME1}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "actionTimestamp": ${TIME1}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "actionTimestamp": ${TIME1}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37º", "actionTimestamp": ${TIME2}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "actionTimestamp": ${TIME2}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "actionTimestamp": ${TIME2}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37º", "actionTimestamp": ${TIME3}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "actionTimestamp": ${TIME3}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "actionTimestamp": ${TIME3}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37º", "actionTimestamp": ${TIME4}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "actionTimestamp": ${TIME4}}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "actionTimestamp": ${TIME4}}`));
    this.itemsVitalTake.next(this.valuesVitalTake);

    console.log("valuesVital", this.valuesVital);
    console.log("itemsVital", this.itemsVital);
    console.log("valuesVitalTake", this.valuesVitalTake);
    console.log("itemsVitalTake", this.itemsVitalTake);
  }

  private getFirstLetter(fullName: string): string {
    return fullName.charAt(0).toUpperCase();
  }

  private transformTime(appointmentTimestamp: number): Date {
    var epoch = appointmentTimestamp;
    var date = new Date(0);
    date.setUTCSeconds(epoch);
    return date;
  }

  private getPatientName(id: number): string {
    var fullName = '';
    this.valuesPatient.forEach((patient, index) => {
      if (id == patient.id) {
        fullName = patient.fullName;
      }
    });
    return fullName;
  }
}
