import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public afAuth: AngularFireAuth) { }
 async loginGoogle()  {

      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());

  }
}