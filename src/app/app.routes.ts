import { Routes } from '@angular/router';
import { TareaPageComponent } from './tarea/pages/tarea-page/tarea-page.component';
import { PadreComponent } from './input/padre/padre.component';

export const routes: Routes = [
  {
    path:'',
    component:TareaPageComponent
  },
  {
    path:'papa',
    component: PadreComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];
