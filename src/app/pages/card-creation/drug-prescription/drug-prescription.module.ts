import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugPrescriptionComponent } from './drug-prescription.component';
import { RouterModule, Routes } from '@angular/router';


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
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DrugPrescriptionModule { }
