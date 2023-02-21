import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULOS
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';


// COMPONENTES
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BoxComponent } from './componentes/box/box.component';
import { BoxContainerComponent } from './componentes/box-container/box-container.component';
import { BoxCardComponent } from './componentes/box-container/box-card/box-card.component';
import { ComentariosComponent } from './componentes/box/comentarios/comentarios.component';
import { FormularioBoxComponent } from './componentes/nav/formulario-box/formulario-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoxComponent,
    BoxContainerComponent,
    BoxCardComponent,
    ComentariosComponent,
    FormularioBoxComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
