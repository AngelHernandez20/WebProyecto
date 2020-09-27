import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : '',redirectTo:'home',pathMatch:'full' },
  { path : 'home' ,component : LandingPageComponent },
  { path :'login',component : LoginComponent },
  {path : 'registro',component: RegisterComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
