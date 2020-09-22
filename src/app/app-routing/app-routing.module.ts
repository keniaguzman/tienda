import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MujerComponent } from '../pages/mujer/mujer.component';
import { HombreComponent} from '../pages/hombre/hombre.component';
import { AgregarRopaComponent} from '../pages/admin/agregar-ropa/agregar-ropa.component';
import { ListadoRopaComponent} from '../pages/admin/listado-ropa/listado-ropa.component';

const routes: Routes = [
  {
    path: 'mujer',
    component: MujerComponent,
  },
  {
    path: 'hombre',
    component: HombreComponent,
  },
  {
    path: 'agregarRopa',
    component:  AgregarRopaComponent,
  },
  {
    path: 'listadoRopa',
    component:  ListadoRopaComponent,
  },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
