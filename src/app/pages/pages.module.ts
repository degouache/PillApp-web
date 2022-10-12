import { NgModule } from '@angular/core';
import { RegisterModule } from './register/register.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [RegisterModule, LoginModule],
  exports: [RegisterModule, LoginModule],
  providers: [],
})
export class PagesModule {}
