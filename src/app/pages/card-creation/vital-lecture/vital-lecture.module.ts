import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitalLectureComponent } from './vital-lecture.component';
import { RouterModule, Routes } from '@angular/router';
import {TopNavigationModule} from "../../../shared/top-navigation/top-navigation.module";

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
        CommonModule, RouterModule.forChild(routes), TopNavigationModule
    ]
})
export class VitalLectureModule { }
