import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientsAllComponent } from './patients-all.component';
import { CardCaredPersonListComponent } from 'src/app/shared/card-cared-person-list/card-cared-person-list.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsAllComponent,
  },
];

@NgModule({
  declarations: [PatientsAllComponent, CardCaredPersonListComponent,],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PatientsAllModule {}