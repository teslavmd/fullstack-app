import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comentario } from 'src/app/modelos/comentario.model';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  listOfComments : Comentario[] = [];

  comentario : string = "";
  // userName : string = "";
  id : number = 0;

  constructor(
    private comentariosService : ComentariosService
  ) { }

  ngOnInit(): void {
    this.getComments();

    this.id = this.listOfComments.length;
  }

  getComments(){
    this.listOfComments = this.comentariosService.getComments()
  }


  subirComentario(comentario : string, form : NgForm){
    let id1 = (this.id + 1);

    let comment = new Comentario(
      id1,
      "",
      comentario,
      "matiasvd"
    )

    this.comentariosService.subirComentario(comment);

    form.reset();

    this.getComments()
  }


}
