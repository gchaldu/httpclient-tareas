import { Component, inject, OnInit } from '@angular/core';
import { UpdateTareaComponent } from '../../components/update-tarea/update-tarea.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-tarea-page',
  standalone: true,
  imports: [UpdateTareaComponent],
  templateUrl: './update-tarea-page.component.html',
  styleUrl: './update-tarea-page.component.css'
})
export class UpdateTareaPageComponent implements OnInit {

  route = inject(ActivatedRoute);

  id: string | null = ''


  ngOnInit(): void {
    // Captura el ID de la URL
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id'); // 'id' es el nombre del parámetro en la ruta
      console.log(this.id);
    });
  }


}
