import { ServicesService } from './../auth/services.service';

import { UserInterface } from './../Model/user-interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServicesService]
})
export class LoginComponent implements OnInit {

  public newLoggin:UserInterface;


  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: ServicesService, private router: Router) { }

  ngOnInit(): void {

  }


  async onLogin(){

    this.newLoggin = {} = await this.loginForm.value;
    this.newLoggin.password2=this.newLoggin.password1;
      try {
        let Response = this.authSvc.LoginEntrar(this.newLoggin).subscribe(async data=>{
          await this.router.navigate(['/home']);
          await window.location.reload();
        });
      } catch (error) {
             
      }

  }
  
    async onGoogleLogin() {
    try {
      const googleUser = this.authSvc.loginGoogle();
      if (googleUser) {
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
