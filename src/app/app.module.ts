import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HombreComponent } from './pages/hombre/hombre.component';

@NgModule({
  declarations: [
    AppComponent,
    MujerComponent,
    HombreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
