import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberDoItComponent } from './remember-do-it.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RememberDoItComponent,
  },
];

@NgModule({
  declarations: [
    RememberDoItComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RememberDoItModule { }
