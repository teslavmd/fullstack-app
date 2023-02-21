import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './componentes/box/box.component';
import { BoxContainerComponent } from './componentes/box-container/box-container.component';


const routes : Routes = [
  {path : "", component :  BoxContainerComponent},
  {path : "box/:id", component : BoxComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
