import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitalLectureComponent } from './vital-lecture.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VitalLectureComponent,
  },
];

@NgModule({
  declarations: [
    VitalLectureComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class VitalLectureModule { }
