import { Component } from '@angular/core';
import { Peliculas } from '../../models/peliculas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas-details',
  standalone: true,
  imports: [],
  templateUrl: './peliculas-details.component.html',
  styleUrl: './peliculas-details.component.css'
})
export class PeliculasDetailsComponent {
  pelicula: Peliculas | undefined;
  
  peliculas =[
    {id:1,titulo:"Invicto 3",descripcion:"Un campeón de lucha profesional es trasladado a una prisión ucraniana para participar en un torneo en el que se competirá a vida o muerte con apuestas millonarias y en el que el vencedor obtendrá la libertad.",portada:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_yq6H0KDWftvFZeZ5-ZR5QGnaf2r7Qm3ZfAXv5tQwRW89_PlhRCslJLLFsX-lcU78h_tF5njSpLVAhYVEI9DZ4pq7zyUpZxuiQ4_Uw"},
    {id:2,titulo:"Spirit",descripcion:"Un caballo salvaje viaja a través de la frontera americana, hace amistad con un indio lakota y encuentra el amor con una yegua.",portada:"https://es.web.img3.acsta.net/medias/nmedia/18/68/23/74/20299688.jpg"}
  ];
  constructor(private ruta:ActivatedRoute){}
  ngOnInit():void{
const id = Number(this.ruta.snapshot.paramMap.get('id'));
this.pelicula=this.peliculas.find(p => p.id===id);
  }

}
