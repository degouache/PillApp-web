import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cared-person-home',
  templateUrl: './card-cared-person-home.component.html',
  styleUrls: ['./card-cared-person-home.component.css']
})
export class CardCaredPersonHomeComponent implements OnInit {

  @Input() public patient: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
