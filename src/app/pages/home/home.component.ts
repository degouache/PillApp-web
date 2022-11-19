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

  constructor(private homeCardService: HomeCardService) {}

  ngOnInit(): void {
    this.homeCardService.getUserData().subscribe((patientData) => {
      for (const update of patientData.updates) {
        if (update.type == 'patient') {
          update.data.firstLetter = this.getFirstLetter(update.data.fullName);
          this.valuesPatient.push(update.data);
          this.itemsPatient.next(this.valuesPatient);
          console.log(this.valuesPatient);
        }
      }
    });
    this.homeCardService.getUserData().subscribe((patientData) => {
      for (const update of patientData.updates) {
        if (update.type == 'meeting') {
          this.valuesMeeting.push(update.data);
          this.itemsMeeting.next(this.valuesMeeting);
          console.log(this.valuesMeeting);
        }
      }
    });
  }

  public getFirstLetter(fullName: string): string {
    return fullName.charAt(0).toUpperCase();
  }

  onLogout(): void {}
}
