import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugPrescriptionComponent } from './drug-prescription.component';
import { RouterModule, Routes } from '@angular/router';
import {TopNavigationModule} from "../../../shared/top-navigation/top-navigation.module";


const routes: Routes = [
  {
    path: '',
    component: DrugPrescriptionComponent,
  },
];
@NgModule({
  declarations: [
    DrugPrescriptionComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), TopNavigationModule
  ]
})
export class DrugPrescriptionModule { }
