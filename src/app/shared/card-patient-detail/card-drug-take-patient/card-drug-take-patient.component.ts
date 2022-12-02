import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-drug-take-patient',
  templateUrl: './card-drug-take-patient.component.html',
  styleUrls: ['./card-drug-take-patient.component.css']
})
export class CardDrugTakePatientComponent implements OnInit {

  @Input() public drug: any;
  constructor() { }

  ngOnInit() {
  }

}
