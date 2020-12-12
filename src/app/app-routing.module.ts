import { LoginGuard } from './guards2/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { ModalComponent } from './modal/modal.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  { path :'login',component : LoginComponent,canActivate:[LoginGuard]},
  { path : 'home' ,component : LandingPageComponent,canActivate:[AuthGuard]},
  { path : '',redirectTo:'/login',pathMatch:'full' },
  {path : 'register',component: RegisterComponent,canActivate:[LoginGuard]},
  {path : 'edit', component:EditComponent},
  {path : 'modal', component:ModalComponent},
  {path : '***', pathMatch:'full', redirectTo:'modal'},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
