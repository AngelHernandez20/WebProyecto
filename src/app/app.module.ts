
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './nvar/nvar.component';
//Firebase
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditComponent } from './edit/edit.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    
    EditComponent,
    
    ModalComponent,
    
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
