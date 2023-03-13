import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comentario } from 'src/app/modelos/comentario.model';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {



  @Input() id_box : string;
  @Input() listOfComments : Comentario[];


  comentario : string = "";
  // userName : string = "";
  id : number = 0;

  constructor(
    private comentariosService : ComentariosService
  ) { }

  ngOnInit(): void {
    console.log(this.id_box);

    this.id = this.listOfComments.length;
  }




  subirComentario(comentario : string, form : NgForm){
    let comment = new Comentario(
      comentario,
      "2022/06/03",

    )

    this.comentariosService.addComent(comment, this.id_box).subscribe(data => console.log(data));

    form.reset();

  }


}
