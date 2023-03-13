import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Box } from 'src/app/modelos/box.model';
import { BoxService } from 'src/app/servicios/box.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  id : string ;
  box : Box;
  
  constructor(
    private boxService : BoxService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];

    this.searchBox(this.id);
    console.log("id => ", this.id);
  }


  searchBox(id : string){
    this.boxService.searchBox(id).subscribe( data => {
      console.log("response => ", data);
      this.box = data;
      console.log("BOX => ", this.box);
    });
  }
}
  
  
