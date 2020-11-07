import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public user: User;
  
  constructor(public afAuth: AngularFireAuth) { }


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

}
