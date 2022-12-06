import {Component, Input, OnInit} from '@angular/core';
import {ProfileObject} from "../../models/user.interface";

@Component({
  selector: 'app-card-staff',
  templateUrl: './card-staff.component.html',
  styleUrls: ['./card-staff.component.css']
})
export class CardStaffComponent implements OnInit {

  @Input() public profile?: ProfileObject;

  public firstLetter?: string;

  constructor() { }

  ngOnInit() {
    this.firstLetter = this.getFirstLetter(this.profile?.userName);
  }

  private getFirstLetter(fullName?: string): string {
    if (fullName == undefined) return "";
    return fullName.charAt(0).toUpperCase();
  }

}
