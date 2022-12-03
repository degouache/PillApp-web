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
    path: 'patient-detail/:id',
    loadChildren: () =>
      import('./pages/patient-detail/patient-detail.module').then((m) => m.PatientDetailModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'drug-prescription',
    loadChildren: () =>
      import('./pages/card-creation/drug-prescription/drug-prescription.module').then((m) => m.DrugPrescriptionModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'drug-take',
    loadChildren: () =>
      import('./pages/card-creation/drug-take/drug-take.module').then((m) => m.DrugTakeModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'remember-date',
    loadChildren: () =>
      import('./pages/card-creation/remember-date/remember-date.module').then((m) => m.RememberDateModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'remember-do-it',
    loadChildren: () =>
      import('./pages/card-creation/remember-do-it/remember-do-it.module').then((m) => m.RememberDoItModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'vital-lecture',
    loadChildren: () =>
      import('./pages/card-creation/vital-lecture/vital-lecture.module').then((m) => m.VitalLectureModule),
    // canLoad: [LoginGuardGuard]
  },
  {
    path: 'vital-lecture-prescription',
    loadChildren: () =>
      import('./pages/card-creation/vital-lecture-prescription/vital-lecture-prescription.module').then((m) => m.VitalLecturePrescriptionModule),
    // canLoad: [LoginGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
