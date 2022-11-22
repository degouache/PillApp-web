import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './guard/login-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'patients-all',
    loadChildren: () =>
      import('./pages/patients-all/patients-all.module').then((m) => m.PatientsAllModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'patients-creation',
    loadChildren: () =>
      import('./pages/patients-creation/patients-creation.module').then((m) => m.PatientsCreationModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'patient-detail',
    loadChildren: () =>
      import('./pages/patient-detail/patient-detail.module').then((m) => m.PatientDetailModule),
    // canLoad: [LoginGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
