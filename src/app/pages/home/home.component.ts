import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logedIn = false;

  constructor(private autheService: AuthService) { }

  ngOnInit(): void {
    this.autheService.logedIn.subscribe(response => this.logedIn = response)
  }

  onLogout(): void{
    this.autheService.logout();
  }
}
