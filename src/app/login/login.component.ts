import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {ServiceService} from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(private authSvc:ServiceService,private router: Router) { }
  ngOnInit(): void {
  }
  async onGoogleLogin() {
    try {
      await this.authSvc.loginGoogle();
    } catch (error) {
      console.log(error);
    }
  }


}
