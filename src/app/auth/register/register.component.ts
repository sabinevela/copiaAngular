import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email:string='';
  password:string='';

  constructor(private servicio:AuthService, private route:Router){}

  register(){
    this.servicio.register(this.email,this.password)
    .then((userCredentials)=>{
      const user = userCredentials.user;
      this.route.navigate(['/login'])
    })
  }

}
