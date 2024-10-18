import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tarea } from '../interface/tarea.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  urlBase: string = 'http://localhost:3000/tareas';

  private http2 = inject(HttpClient);
  constructor(private http: HttpClient) { }

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.urlBase)
  }

  postTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.urlBase, tarea)
  }

  getTareaById(id: string | null): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.urlBase}/${id}`)
  }

  deleteTarea(id: string | undefined): Observable<Tarea> {
    return this.http.delete<Tarea>(`${this.urlBase}/${id}`)
  }

  putTarea(id: string | null, tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.urlBase}/${id}`, tarea)
  }

}
