import { PatientData, DataObject } from './../../shared/models/patient.interface';
import { HomeCardService } from './../../services/home-card/home-card.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-all',
  templateUrl: './patients-all.component.html',
  styleUrls: ['./patients-all.component.css']
})
export class PatientsAllComponent implements OnInit {
  
  

 
  public items : BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public values : DataObject[] = [];

  constructor( private router:Router, private homeCardService: HomeCardService) { }

  ngOnInit(): void { 
    this.homeCardService.getUserData().subscribe((patientData) => {
      console.log(patientData);
      for ( const update of patientData.updates) {
          if (update.type == "patient") { 
            update.data.firstLetter = this.getFirstLetter(update.data.fullName);
            this.values.push(update.data);
            this.items.next(this.values);
          }
      }
    }
    );
  }
  public add(): void {
    this.router.navigate(['/patients-creation']);
  }

  public getFirstLetter(fullName : string): string {
    return fullName.charAt(0).toUpperCase();
  } 
}
