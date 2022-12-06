import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitalLecturePrescriptionComponent } from './vital-lecture-prescription.component';
import { RouterModule, Routes } from '@angular/router';
import {TopNavigationModule} from "../../../shared/top-navigation/top-navigation.module";

const routes: Routes = [
  {
    path: '',
    component: VitalLecturePrescriptionComponent,
  },
];

@NgModule({
  declarations: [
    VitalLecturePrescriptionComponent
  ],
    imports: [
        CommonModule, RouterModule.forChild(routes), TopNavigationModule
    ]
})
export class VitalLecturePrescriptionModule { }
