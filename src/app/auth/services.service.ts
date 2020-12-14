import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInterface } from './../Model/user-interface';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public userData$: Observable<firebase.User>;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private httpOptions : any ;
  private appuser: UserInterface;
  private CurrentUser: UserInterface;

  private API = 'http://backweb.ddns.net/api/v1/auth/'
  private Token;
  
  constructor(public afAuth: AngularFireAuth, private http: HttpClient,private storage: AngularFireStorage) {
    this.userData$ = afAuth.authState; 

     this.httpOptions = {
       headers: new HttpHeaders({
         'Content-Type' : "application/json",
 
       })
     }
   }
  
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

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
  
  Registro(newUser: UserInterface): Observable<any> {
    try {
      return this.http.post<any>(`${this.API}registration/`,
        newUser).pipe(tap(
          (res: any) => {
            if (res) {
              
              this.setToken(res.key, newUser);
            }
          })
        );
    } catch (error) {
    }
  }

  loginuser(email: string, password1: string): Observable<any> {
    // const url_api = "http://127.0.0.1:8000/api/v1/auth/login/";
    const url_api = "http://backweb.ddns.net/api/v1/auth//login/";
    
    return this.http
      .post<UserInterface>(
        url_api,
        { email, password1},
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  

  LogoutSalir(key = ''){
    this.Token = '';
    this.CurrentUser = null;
    this.loggedIn.next(false);
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("CurrentUser");
    return this.http.post(`${this.API}logout/`,{})
  }

  // setToken(token): void {
  //   localStorage.setItem("accessToken", token);
  // }


   setToken(token: string, newuser: UserInterface) {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('CurrentUser', JSON.stringify(newuser));
    this.Token = token;
    this.CurrentUser = newuser;
  }

    getToken() {
      if (!this.Token) {
        this.Token = localStorage.getItem('ACCESS_TOKEN')
      }
      return this.Token;
    }

  get onlogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // getToken() {
  //   return localStorage.getItem("accessToken");
  // }

  getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  LoginEntrar(newUser: UserInterface): Observable<any> {
    return this.http.post<any>(`${this.API}login/`,
      newUser).pipe(tap(
        (res: any) => {
          if (res) {
            
            this.setToken(res.key, newUser);
            this.loggedIn.next(true);
          }
        })
      );
  }
  
  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }


}
