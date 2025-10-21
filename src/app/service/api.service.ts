import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api="https://jritsqmet.github.io/web-api/peliculas1.json"
  constructor(private http:HttpClient) { }
  traer():Observable<any>{
    return this.http.get<any>(this.api);
  }
}
