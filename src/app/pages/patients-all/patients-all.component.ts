import { PatientData } from './../../shared/models/patient.interface';
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
  
  item = this.homeCardService.getUserData;
  public items : BehaviorSubject<any> = new BehaviorSubject<any>([{name:'Bea'}]);
  // public values = [{name:'Bea'}];
  patientData: PatientData[] = [];


  constructor( private router:Router, private homeCardService: HomeCardService) { }

  ngOnInit(): void { 
  }

  public add(): void {
    // this.values.push({name:'Bea'});
    // this.items.next(this.values);
    this.router.navigate(['/patients-creation']);
  }

}
