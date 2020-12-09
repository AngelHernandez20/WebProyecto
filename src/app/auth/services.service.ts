import { HttpClient } from '@angular/common/http';
import { UserInterface } from './../Model/user-interface';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private loggedIn = new BehaviorSubject<boolean>(false);

  private appuser: UserInterface;
  private CurrentUser: UserInterface;

  private API_REST = 'http://127.0.0.1:8000/api/v1/auth/' //Mi link 
  private Token;
  
  constructor(public afAuth: AngularFireAuth, private http: HttpClient) { }


  async loginGoogle() {
    try {
      //return this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }

  async logOut() {
    try {
      await this.afAuth.signOut();
      //redirect
    }
    catch (error) {
      console.log(error);
    }
  }

  //*******************************************************/
  
  authRegister(newUser: UserInterface): Observable<any> {
    try {
      return this.http.post<any>(`${this.API_REST}registration/`,
        newUser).pipe(tap(
          (res: any) => {
            if (res) {
              newUser.password1 = "*******";
              newUser.password2 = "*******";
              this.setToken(res.key, newUser);
            }
          })
        );
    } catch (error) {
    }
  }

  authLogin(newUser: UserInterface): Observable<any> {
    return this.http.post<any>(`${this.API_REST}login/`,
      newUser).pipe(tap(
        (res: any) => {
          if (res) {
            newUser.password1 = "*******";
            newUser.password2 = "*******";
            this.setToken(res.key, newUser);
            this.loggedIn.next(true);
          }
        })
      );
  }

  authLogout(key = ''){
    this.Token = '';
    this.CurrentUser = null;
    this.loggedIn.next(false);
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("CurrentUser");
    return this.http.post(`${this.API_REST}logout/`,{})
  }

  private setToken(token: string, newuser: UserInterface) {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('CurrentUser', JSON.stringify(newuser));
    this.Token = token;
    this.CurrentUser = newuser;
  }

  private getToken() {
    if (!this.Token) {
      this.Token = localStorage.getItem('ACCESS_TOKEN')
    }
    return this.Token;
  }

  get onlogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


}
