import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logedIn = false;

  constructor(private autheService: AuthService) { }

  ngOnInit(): void {
    this.autheService.logedIn.subscribe(response => this.logedIn = response)
  }

  onLogout(): void{
    this.autheService.logout();
  }
}
