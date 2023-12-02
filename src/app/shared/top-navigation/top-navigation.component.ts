import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Location } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  logedIn = false;
  @Input() public backUrl : string = "home";

  constructor(private autheService: AuthService, private location: Location, private router:Router) {}

  ngOnInit(): void {
    this.autheService.logedIn.subscribe(
      (response) => (this.logedIn = response)
    );
  }

  logout(): void {
    this.autheService.logout();
  }

  back(): void {
    this.location.back();
  }

  home(): void {
    this.router.navigate(['home']);
  }

}
