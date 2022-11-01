import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { CardDrugComponent } from 'src/app/shared/card-drug/card-drug.component';
import { CardRememberDateComponent } from 'src/app/shared/card-remember-date/card-remember-date.component';
import { CardRememberDoItComponent } from 'src/app/shared/card-remember-do-it/card-remember-do-it.component';
import { CardVitalComponent } from 'src/app/shared/card-vital/card-vital.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CardDrugComponent,
    CardRememberDateComponent,
    CardRememberDoItComponent,
    CardVitalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
