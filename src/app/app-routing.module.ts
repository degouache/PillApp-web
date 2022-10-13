import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routesPages: Routes = [
    {
      path: '',
      loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule),
    }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routesPages)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
