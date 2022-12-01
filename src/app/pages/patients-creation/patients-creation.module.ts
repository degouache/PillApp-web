import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsCreationComponent } from './patients-creation.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {TopNavigationModule} from "../../shared/top-navigation/top-navigation.module";

const routes: Routes = [
  {
    path: '',
    component: PatientsCreationComponent,
  },
];

@NgModule({
  declarations: [PatientsCreationComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, TopNavigationModule
  ]
})
export class PatientsCreationModule { }
