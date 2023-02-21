import { Component, OnInit } from '@angular/core';
import { Box } from 'src/app/modelos/box.model';
import { BoxService } from 'src/app/servicios/box.service';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.css']
})
export class BoxCardComponent implements OnInit {

  // url = https://www.omdbapi.com/?apikey=cb969dbe

  list : Box[] = [];

  constructor(
    private boxService : BoxService
  ) { }

  ngOnInit(): void {
    this.getBox();
  }

  getBox(){
    this.list = this.boxService.getBoxes()
  }

}
