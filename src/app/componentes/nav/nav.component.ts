import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showForm : boolean = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  showFormPopUp(){
    this.showForm = this.showForm ? false : true;
  }

}
