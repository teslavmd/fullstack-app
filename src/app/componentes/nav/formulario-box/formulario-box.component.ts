import { DatePipe } from '@angular/common';
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

  urlImg : boolean = false;
  base64Img : boolean = false;

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

  //OPCIONES DE INPUT
  usarURL(){
    this.urlImg = this.urlImg? false : true;
  }

  usarBase64(){
    this.base64Img = this.base64Img? false : true;
  }
  ///////


  //EXTRAER BASE64 DE UNA IMAGEN
  handleImg(event : any){

    

    const file = event.target.files[0];

    console.log(file);

    this.extraerBase64(file).then((image : any) => {
      this.foto = image.base;
    })
    console.log(this.foto)
    return this.foto;
  }

  
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();

      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (err) {
      return null;
    }
  })

  //AÑADIR NUEVO BOX
  addBox(event : Event, data : NgForm){
    event.preventDefault();

    const date = new Date();
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(date, 'yyyy/MM/dd');
    console.log(formattedDate);

    console.log("date => ", formattedDate);

    let box = new Box(
      this.titulo,
      this.descripcion,
      this.foto,
      formattedDate
    )

    //HTTP POST
    this.boxService.addBox(box).subscribe(data =>{
       console.log(data);

       this._snackBar.open('BOX creado exitosamente', 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        });
    });
    //
    data.reset();

    
    
    
    this.showForm.emit(false);
   
 }
 ////
}
