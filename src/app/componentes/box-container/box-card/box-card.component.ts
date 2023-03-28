import { Component, OnInit } from '@angular/core';
import { Box } from 'src/app/modelos/box.model';
import { BoxService } from 'src/app/servicios/box.service';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.css']
})
export class BoxCardComponent implements OnInit {


  list : Box[] = [];

  constructor(
    private boxService : BoxService
  ) { }

  ngOnInit(): void {

    //SERVER OFF
    //this.list = this.boxService.getBoxesOff();

    this.getBox();
  }

  getBox(){
    this.boxService.getBoxes().subscribe( data => {

      console.log("boxes => " , data);

      this.list = data;
    })
  }

}
