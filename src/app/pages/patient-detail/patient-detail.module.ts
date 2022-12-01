import { CardStaffComponent } from '../../shared/card-patient-detail/card-staff/card-staff.component';
import { CardVitalTakePatientComponent } from '../../shared/card-patient-detail/card-vital-take-patient/card-vital-take-patient.component';
import { CardDrugPatientComponent } from '../../shared/card-patient-detail/card-drug-patient/card-drug-patient.component';
import { CardRememberDatePatientComponent } from '../../shared/card-patient-detail/card-remember-date-patient/card-remember-date-patient.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailComponent } from './patient-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CardDrugTakePatientComponent } from 'src/app/shared/card-patient-detail/card-drug-take-patient/card-drug-take-patient.component';
import { CardVitalPatientComponent } from 'src/app/shared/card-patient-detail/card-vital-patient/card-vital-patient.component';
import {TopNavigationModule} from "../../shared/top-navigation/top-navigation.module";

const routes: Routes = [
  {
    path: '',
    component: PatientDetailComponent,
  },
];

@NgModule({
  declarations: [
    PatientDetailComponent,
    CardRememberDatePatientComponent,
    CardDrugTakePatientComponent,
    CardDrugPatientComponent,
    CardVitalPatientComponent,
    CardVitalTakePatientComponent,
    CardStaffComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), TopNavigationModule],
})
export class PatientDetailModule {}
