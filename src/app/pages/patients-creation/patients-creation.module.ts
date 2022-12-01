import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsCreationComponent } from './patients-creation.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PatientsCreationComponent,
  },
];

@NgModule({
  declarations: [PatientsCreationComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule]
})
export class PatientsCreationModule { }
