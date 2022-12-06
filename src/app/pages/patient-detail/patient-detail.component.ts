import {Component, OnInit} from '@angular/core';
import {PatientDetailCardService} from '../../services/patient-detail-card/patient-detail-card.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BehaviorSubject, Subscription} from 'rxjs';
import {DataObject} from '../../shared/models/patient.interface';
import {ProfileObject} from "../../shared/models/user.interface";

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
  public itemsStaff: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesStaff: ProfileObject[] = [];


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
          update.data.description = this.getDrugName(update.data.drugId);
          this.valuesDrugTake.push(update.data);
          this.itemsDrugTake.next(this.valuesDrugTake);
        }
      }
      this.itemsStaff.next(this.valuesPatient[0].userProfiles);
      console.log("itemStaff", this.itemsStaff);
    });
  }

  loadFakeDataForPatient() {  // hardcoded data that is not in the API
    const now = new Date();
    now.setHours(now.getHours()-8);
    const time1 = now.toISOString();
    now.setHours(now.getHours()-8);
    const time2 = now.toISOString();
    now.setHours(now.getHours()-8);
    const time3 = now.toISOString();
    now.setHours(now.getHours()-8);
    const time4 = now.toISOString();

    this.valuesVital.push(JSON.parse(`{"vitalId": 1, "description": "Temperatura", "period": ${60*60*8}}`));
    this.valuesVital.push(JSON.parse(`{"vitalId": 2, "description": "Ritmo cardiaco", "period": ${60*60*8}}`));
    this.valuesVital.push(JSON.parse(`{"vitalId": 3, "description": "Tensión arterial", "period": ${60*60*8}}`));
    this.itemsVital.next(this.valuesVital);

    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37º", "date": "${time1}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "date": "${time1}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "date": "${time1}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37º", "date": "${time2}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "date": "${time2}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "date": "${time2}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37º", "date": "${time3}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "date": "${time3}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "date": "${time3}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37º", "date": "${time4}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "date": "${time4}"}`));
    this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "date": "${time4}"}`));
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
    this.valuesPatient.forEach((patient) => {
      if (id == patient.id) {
        fullName = patient.fullName;
      }
    });
    return fullName;
  }

  private getDrugName(id: number): string {
    var drugDescription = '';
    this.valuesDrug.forEach((drug) => {
      if (id == drug.id) {
        drugDescription = drug.description;
      }
    });
    return drugDescription;
  }
}
