import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  usuario: User | null = null;

  constructor(private authService: AuthService, private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.usuario = user;
    });
   
  }
   logout(){
        return signOut(this.auth)
      }
}

