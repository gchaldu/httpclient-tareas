import { Component, inject, Input, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../interface/tarea.interface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-tarea.component.html',
  styleUrl: './update-tarea.component.css'
})
export class UpdateTareaComponent implements OnInit {

  @Input()
  id: string | null = '';

  serviceTarea = inject(TareaService)

  router = inject(Router)

  tarea: Tarea = {
    nombre: ''
  }

  ngOnInit(): void {

    this.getPorId()
  }

  getPorId() {
    this.serviceTarea.getTareaById(this.id).subscribe({
      next: (tarea) => {
        this.tarea = tarea;
        console.log(this.tarea)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  actualizar(event: any) {
    event.preventDefault()
    this.serviceTarea.putTarea(this.id, this.tarea).subscribe(
      {
        next: () => {
          alert('Tarea actualizada...')
          this.router.navigateByUrl('')
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
}
