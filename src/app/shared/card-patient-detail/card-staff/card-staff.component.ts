import {Component, Input, OnInit} from '@angular/core';
import {DataObject} from "../../models/patient.interface";

@Component({
  selector: 'app-card-staff',
  templateUrl: './card-staff.component.html',
  styleUrls: ['./card-staff.component.css']
})
export class CardStaffComponent implements OnInit {

  @Input() public data?: DataObject;

  constructor() { }

  ngOnInit() { }

}
