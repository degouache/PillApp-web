import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  logedIn = false;
  @Input() public backUrl : string = "PillApp-web/home";

  constructor(private autheService: AuthService, private location: Location) {}

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

}
