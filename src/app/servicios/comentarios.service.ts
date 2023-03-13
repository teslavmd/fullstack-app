import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario } from '../modelos/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url : string = environment.url;

  constructor(
    private http : HttpClient
  ) { }



  getComments() : Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.url}/comments`)
  }

  addComent(comment: Comentario, id : string) : Observable<Comentario>{
    return this.http.post<Comentario>(`${this.url}/comments/${id}`, comment);
  }

}
