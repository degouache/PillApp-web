import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-drug',
  templateUrl: './card-drug.component.html',
  styleUrls: ['./card-drug.component.css']
})
export class CardDrugComponent implements OnInit {

  @Input() public drug: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
