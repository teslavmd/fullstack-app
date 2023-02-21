import { Injectable } from '@angular/core';
import { Comentario } from '../modelos/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  listOfComents : Comentario[] = [
    {
      id : 1,
      fotoPfp : "",
      contenido : "HOLA POST BOX DESDE FRONT",
      userName : "ChadOCA"
    },
    {
      id : 2,
      fotoPfp : "",
      contenido : "kejeje ta bien",
      userName : "matiasvd"
    },
    {
      id : 3,
      fotoPfp : "",
      contenido : "qe bueno amigo matate",
      userName : "cepitero"
    },
    {
      id : 4,
      fotoPfp : "",
      contenido : "y nene down",
      userName : "gordo123"
    },
  ] 

  constructor(

  ) { }

  getComments() : Comentario[]{
    return this.listOfComents;
  }

  subirComentario(comentario: Comentario){
    this.listOfComents.push(comentario);
  }

}
