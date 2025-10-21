import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit{
  peliculas:any=[]

  constructor(private servicio: ApiService){}
  ngOnInit(): void {
    this.servicio.traer().subscribe((resultados):any=>{
      this.peliculas=resultados.peliculas
    })
  }


}
