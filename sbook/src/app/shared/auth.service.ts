import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireaut : AngularFireAuth, private router : Router) { }
  //Login Method
  login(email: string, password: string){
    this.fireaut.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard'])
    }, err => {
      alert(err.message);
      this.router.navigate(['/login'])
    })
  }

  // register method
  register(email: string, password: string){
    this.fireaut.createUserWithEmailAndPassword(email,password).then( () => {
      alert('Registration Successfull');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message);
      this.router.navigate(['/register'])
    })
  }

  //Sign out
  logout(){
    this.fireaut.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message);
    })
  }
}
