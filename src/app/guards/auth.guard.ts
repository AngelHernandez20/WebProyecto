import { ServicesService } from './../auth/services.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private aut:ServicesService, private router: Router){}
  canActivate(): boolean{
    if(this.aut.getToken()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
