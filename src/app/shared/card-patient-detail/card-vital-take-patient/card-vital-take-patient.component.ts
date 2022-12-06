import {Component, Input, OnInit} from '@angular/core';
import {DataObject} from "../../models/patient.interface";

@Component({
  selector: 'app-card-vital-take-patient',
  templateUrl: './card-vital-take-patient.component.html',
  styleUrls: ['./card-vital-take-patient.component.css']
})
export class CardVitalTakePatientComponent implements OnInit {

  @Input() public data?: DataObject;

  constructor() { }

  ngOnInit() { }

}
