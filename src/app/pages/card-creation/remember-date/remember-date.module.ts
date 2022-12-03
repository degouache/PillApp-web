import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberDateComponent } from './remember-date.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RememberDateComponent,
  },
];

@NgModule({
  declarations: [
    RememberDateComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RememberDateModule { }
