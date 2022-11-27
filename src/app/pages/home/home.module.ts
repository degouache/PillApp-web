import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { CardDrugComponent } from 'src/app/shared/card-home/card-drug/card-drug.component';
import { CardRememberDateComponent } from 'src/app/shared/card-home/card-remember-date/card-remember-date.component';
import { CardRememberDoItComponent } from 'src/app/shared/card-home/card-remember-do-it/card-remember-do-it.component';
import { CardVitalComponent } from 'src/app/shared/card-home/card-vital/card-vital.component';
import { CardCaredPersonHomeComponent } from 'src/app/shared/card-home/card-cared-person-home/card-cared-person-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardDrugComponent,
    CardRememberDateComponent,
    CardRememberDoItComponent,
    CardVitalComponent,
    CardCaredPersonHomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
