import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugTakeComponent } from './drug-take.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DrugTakeComponent,
  },
];

@NgModule({
  declarations: [
    DrugTakeComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DrugTakeModule { }
