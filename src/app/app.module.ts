import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HombreComponent } from './pages/hombre/hombre.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { FormsModule }   from '@angular/forms';
import { ListadoRopaComponent } from './pages/admin/listado-ropa/listado-ropa.component';
import { AgregarRopaComponent } from './pages/admin/agregar-ropa/agregar-ropa.component';


@NgModule({
  declarations: [
    AppComponent,
    MujerComponent,
    HombreComponent,
    NavComponent,
    CarouselComponent,
    ListadoRopaComponent,
    AgregarRopaComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
