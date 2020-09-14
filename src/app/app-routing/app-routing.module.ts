import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MujerComponent } from '../pages/mujer/mujer.component';
import { HombreComponent} from '../pages/hombre/hombre.component';

const routes: Routes = [
  {
    path: '',
    component: MujerComponent,
  },
  {
    path: 'hombre',
    component: HombreComponent,
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
