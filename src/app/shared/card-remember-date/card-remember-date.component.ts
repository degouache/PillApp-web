import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-remember-date',
  templateUrl: './card-remember-date.component.html',
  styleUrls: ['./card-remember-date.component.css']
})
export class CardRememberDateComponent implements OnInit {

  @Input() public meeting: any;
  constructor() { }

  ngOnInit(): void {
  }

}
