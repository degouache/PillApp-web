import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  logedIn = false;

  constructor(private autheService: AuthService) {}

  ngOnInit(): void {
    this.autheService.logedIn.subscribe(
      (response) => (this.logedIn = response)
    );
  }
  onLogout(): void {
    this.autheService.logout();
  }
}
