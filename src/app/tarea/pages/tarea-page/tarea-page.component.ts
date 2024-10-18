import { Component } from '@angular/core';
import { ListTareaComponent } from '../../components/list-tarea/list-tarea.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-tarea-page',
  standalone: true,
  imports: [ListTareaComponent, NavbarComponent],
  templateUrl: './tarea-page.component.html',
  styleUrl: './tarea-page.component.css'
})
export class TareaPageComponent {

}
