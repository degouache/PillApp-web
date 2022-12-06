import { Component, Input, OnInit } from '@angular/core';
import {DataObject} from "../../models/patient.interface";

@Component({
  selector: 'app-card-remember-date-patient',
  templateUrl: './card-remember-date-patient.component.html',
  styleUrls: ['./card-remember-date-patient.component.css']
})
export class CardRememberDatePatientComponent implements OnInit {

  @Input() public data?: DataObject;

  constructor() { }

  ngOnInit() { }

}
