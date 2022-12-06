import {Component, Input, OnInit} from '@angular/core';
import {DataObject} from "../../models/patient.interface";

@Component({
  selector: 'app-card-vital-patient',
  templateUrl: './card-vital-patient.component.html',
  styleUrls: ['./card-vital-patient.component.css']
})
export class CardVitalPatientComponent implements OnInit {

  @Input() public data?: DataObject;
  public periodText : string = "";

  constructor() { }

  ngOnInit() {
    this.periodText = "Cada 8 horas";
  }

}
