import {Component, Input, OnInit} from '@angular/core';
import {DataObject} from "../../models/patient.interface";

@Component({
  selector: 'app-card-remember-do-it-patient',
  templateUrl: './card-remember-do-it-patient.component.html',
  styleUrls: ['./card-remember-do-it-patient.component.css']
})
export class CardRememberDoItPatientComponent implements OnInit {

  @Input() public data?: DataObject;

  constructor() { }

  ngOnInit() { }

}
