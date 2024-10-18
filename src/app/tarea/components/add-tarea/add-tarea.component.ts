import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../interface/tarea.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {
  @Output()
  emitirTarea: EventEmitter<Tarea> = new EventEmitter();

  tarea: Tarea = {
    nombre:''
  }

  addTarea(){

    console.log(this.tarea);
    this.emitirTarea.emit({...this.tarea})
  }

}
