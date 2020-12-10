import { ServicesService } from './../auth/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './nvar.component.html',
  styleUrls: ['./nvar.component.css'],
  providers: [ServicesService]
})

export class NavbarComponent implements OnInit {

  constructor(public authSvc: ServicesService, private router: Router) { }

  private isLogged;
  private CurrentUser;
  private UserToken;

  public user$ = false;

  ngOnInit() {
    this.getCurrentAppUser();
  }

  async onLogOut() {
    let uToken = this.UserToken;
    try {
      let Response = await this.authSvc.LogoutSalir().subscribe();
      this.user$ = false;
      await this.router.navigate(['/home']);
    } catch (error) {
           
    }
  }

  getCurrentAppUser() {
    let token = localStorage.getItem('ACCESS_TOKEN');
    let user = JSON.parse(localStorage.getItem('CurrentUser'));
    if (user && token) {
      this.isLogged=true;
      this.CurrentUser = user;
      this.UserToken = token;
      this.user$ = true;
    } else {
      let output = 'No CurrentUser'
    }
  }

}
