import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HomeCardService } from 'src/app/services/home-card/home-card.service';
import { DataObject } from 'src/app/shared/models/patient.interface';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public items : BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public values : DataObject[] = [];
 
  constructor(private autheService: AuthService, private router:Router, private homeCardService: HomeCardService) {}

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

  public getFirstLetter(fullName : string): string {
    return fullName.charAt(0).toUpperCase();
  } 

  onLogout(): void {}
}
