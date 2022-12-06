import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-drug-patient',
  templateUrl: './card-drug-patient.component.html',
  styleUrls: ['./card-drug-patient.component.css']
})
export class CardDrugPatientComponent implements OnInit {

  @Input() public drug: any;
  constructor() { }

  ngOnInit() {
  }

}
