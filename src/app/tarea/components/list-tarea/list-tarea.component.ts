import { Component } from '@angular/core';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { Tarea } from '../../interface/tarea.interface';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent {
  listaTareas: Tarea[] = [
    { nombre:'Hacer el tp' },
    { nombre:'Hacer el tp' },
    { nombre:'Hacer el tp' }
  ]

  agregarLista(tarea: Tarea){
    this.listaTareas.push(tarea);
  }
}
