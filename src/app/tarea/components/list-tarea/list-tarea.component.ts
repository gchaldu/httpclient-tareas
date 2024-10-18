import { Component, inject, OnInit } from '@angular/core';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { Tarea } from '../../interface/tarea.interface';
import { TareaService } from '../../services/tarea.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent, RouterLink],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent implements OnInit {

  tareaService: TareaService = inject(TareaService);

  listaTareas: Tarea[] = [];

  ngOnInit(): void {
    this.listar()
  }


  agregarLista(tarea: Tarea) {
    this.listaTareas.push(tarea);
    this.listar();
  }

  eliminarTareaLista(index: number, id: string | undefined) {

    if (confirm(`Desea eliminar la Tarea con id: ${id}`)) {

      this.listaTareas.splice(index, 1);
      this.tareaService.deleteTarea(id).subscribe(
        {
          next: (tarea) => {
            console.log(tarea)
          },
          error: (error) => {
            console.log(error)
          }
        }
      )
    }
  }

  listar() {
    this.tareaService.getTareas().subscribe(
      {
        next: (tareas) => {
          this.listaTareas = tareas
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
}
