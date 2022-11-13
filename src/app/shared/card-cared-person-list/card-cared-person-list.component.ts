import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-cared-person-list',
  templateUrl: './card-cared-person-list.component.html',
  styleUrls: ['./card-cared-person-list.component.css']
})
export class CardCaredPersonListComponent implements OnInit {

  @Input() public patient: any;

  constructor() { }

  ngOnInit(): void {
  }

}
