import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comentario } from 'src/app/modelos/comentario.model';
import { BoxService } from 'src/app/servicios/box.service';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit{

  @Input() id_box : string;
  @Input() listOfComments : Comentario[];


  comentario : string = "";
  // userName : string = "";
  id : string;

  constructor(
    private comentariosService : ComentariosService,
    private boxService : BoxService,
    private activatedRoute : ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    console.log(this.id_box);
    this.id = this.activatedRoute.snapshot.params["id"];
  }
  
  subirComentario(comentario : string, form : NgForm){
    let comment = new Comentario(
      comentario,
      "2022/06/03",
    )
    this.comentariosService.addComent(comment, this.id_box).subscribe(
      data => {
          this.boxService.searchBox(this.id).subscribe(box => {
          this.listOfComments = box.commentsModelList;
        })
      }
      );
    form.reset();
  }


}
