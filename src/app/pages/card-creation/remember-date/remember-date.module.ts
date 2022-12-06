import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberDateComponent } from './remember-date.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {TopNavigationModule} from "../../../shared/top-navigation/top-navigation.module";

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
        CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, TopNavigationModule
    ]
})
export class RememberDateModule { }
