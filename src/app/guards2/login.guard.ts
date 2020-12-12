import { ServicesService } from './../auth/services.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private aut:ServicesService, private router: Router){}
  canActivate(): boolean{
    if(this.aut.getToken()){
      this.router.navigate(['/home'])
      return false
    }else{
      
      return true
    }
  } 
}
