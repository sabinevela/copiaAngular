import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string='';
  password:string='';

  constructor(private servicio:AuthService, private route:Router){}

  login(){
    this.servicio.login(this.email,this.password)
    .then ((userCredentials)=>{
      const user=userCredentials.user;
      this.route.navigate(['/home']);
    })
  }
}
