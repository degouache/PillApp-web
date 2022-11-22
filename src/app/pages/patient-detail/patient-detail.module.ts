import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailComponent } from './patient-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PatientDetailComponent
  }
];

@NgModule({
  declarations: [PatientDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]

})
export class PatientDetailModule { }
