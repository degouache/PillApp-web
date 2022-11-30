import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeCardService } from 'src/app/services/home-card/home-card.service';
import { DataObject } from 'src/app/shared/models/patient.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public itemsPatient: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesPatient: DataObject[] = [];
  public itemsMeeting: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesMeeting: DataObject[] = [];
  public itemsDrug: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public valuesDrug: DataObject[] = [];

  constructor(private homeCardService: HomeCardService) {}

  ngOnInit(): void {
    this.homeCardService.getUserData().subscribe((patientData) => {
      for (const update of patientData.updates) {
        if (update.type == 'patient') {
          update.data.firstLetter = this.getFirstLetter(update.data.fullName);
          this.valuesPatient.push(update.data);
          this.itemsPatient.next(this.valuesPatient);
        }
        else if (update.type == 'meeting') {
          update.data.date = this.transformTime(update.data.appointmentTimestamp);
          update.data.fullName = this.getPatientName(update.data.patientId);
          this.valuesMeeting.push(update.data);
          this.itemsMeeting.next(this.valuesMeeting);
        }
        else if (update.type == 'drug') {
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

  onLogout(): void {}
}
