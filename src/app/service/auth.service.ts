import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }
  login(email:string,password:string){
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  register(email:string,password:string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  logout(){
    return signOut(this.auth)
  }
  getUsuario(){
    return this.auth.currentUser
  }
  usuarionoLogueado():Boolean{
return !! this.auth.currentUser
  }
}
