import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Tarea } from '../../interface/tarea.interface';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {


  servicioTarea = inject(TareaService);

  @Output()
  emitirTarea: EventEmitter<Tarea> = new EventEmitter();

  tarea: Tarea = {
    nombre: ''
  }

  addTarea() {

    if (this.tarea.nombre.trim() === '') {
      alert('Complete el campo nombre');
      this.tarea.nombre = '';
      return;
    }

    this.servicioTarea.postTarea(this.tarea).subscribe((task) => {
      console.log(task)
    })

    this.emitirTarea.emit({ ...this.tarea })
    this.tarea.nombre = '';
  }

}
