import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientsAllComponent } from './patients-all.component';
import { CardCaredPersonListComponent } from 'src/app/shared/card-home/card-cared-person-list/card-cared-person-list.component';
import { TopNavigationModule } from "../../shared/top-navigation/top-navigation.module";

const routes: Routes = [
  {
    path: '',
    component: PatientsAllComponent,
  },
];

@NgModule({
  declarations: [PatientsAllComponent, CardCaredPersonListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TopNavigationModule],
})
export class PatientsAllModule {}
