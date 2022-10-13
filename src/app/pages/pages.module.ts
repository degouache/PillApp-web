import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import("./register/register.module").then(m => m.RegisterModule),
  },/*
  {
    path: 'home',
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
    canLoad: 
  }*/
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})

export class PagesModule {}
