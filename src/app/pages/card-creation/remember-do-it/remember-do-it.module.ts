import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberDoItComponent } from './remember-do-it.component';
import { RouterModule, Routes } from '@angular/router';
import {TopNavigationModule} from "../../../shared/top-navigation/top-navigation.module";

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
        CommonModule, RouterModule.forChild(routes), TopNavigationModule
    ]
})
export class RememberDoItModule { }
