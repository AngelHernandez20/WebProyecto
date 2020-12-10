import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { ServicesService } from './../auth/services.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:ServicesService, private roter: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.userData$.pipe(
      map(user =>{
        if(!user){
          this.roter.navigate(['/login']);
          return false;
        }
        
        return true;
      })
    )
  }
  
}
