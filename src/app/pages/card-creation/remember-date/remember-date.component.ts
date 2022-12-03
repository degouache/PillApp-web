import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remember-date',
  templateUrl: './remember-date.component.html',
  styleUrls: ['./remember-date.component.css']
})
export class RememberDateComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  goBack():void{

  }

}
