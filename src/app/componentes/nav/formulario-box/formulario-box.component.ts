import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { Box } from 'src/app/modelos/box.model';
import { BoxService } from 'src/app/servicios/box.service';

@Component({
  selector: 'app-formulario-box',
  templateUrl: './formulario-box.component.html',
  styleUrls: ['./formulario-box.component.css']
})
export class FormularioBoxComponent implements OnInit {

  @Output() showForm = new EventEmitter<boolean>();


  titulo : string;
  descripcion : string;
  foto : string;


  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";

  constructor(
    private boxService : BoxService,
    private route : Router,
    private _snackBar: MatSnackBar
  ) {}


  ngOnInit(): void {
    

  }

  addBox(event : Event, data : NgForm){
    event.preventDefault();
    let box = new Box(
      23,
      data.value.titulo,
      data.value.descripcion,
      data.value.foto,
    )
    this.boxService.addBox(box);
    data.reset();

    
    this._snackBar.open('BOX creado exitosamente', 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    
    this.showForm.emit(false);
   
  }

}
