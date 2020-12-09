import { ServicesService } from './../auth/services.service';
import { UserInterface } from './../Model/user-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../user.service';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ServicesService]
})
export class RegisterComponent implements OnInit {


  public newuser: UserInterface;

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl(''),
  });

  constructor(private authSvc: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }


  async onRegister() {
    this.newuser = {} = await this.registerForm.value;
    
    
      try {
        let Response = await this.authSvc.Registro(this.newuser).subscribe(async data => {

          await this.router.navigate(['/home']);
          window.location.reload();
        })
      } catch (error) {
        
      }
    
  }

//-------------------------------------------------------------

}
