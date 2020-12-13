import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajo } from '../models/Trabajos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TrabajosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTrabajos() {
    return this.http.get(`${this.API_URI}/trabajos`);
  }

  getTrabajo(idTrabajo: string) {
    return this.http.get(`${this.API_URI}/trabajos/${idTrabajo}`);
  }

  deleteTrabajo(idTrabajo: string) {
    return this.http.delete(`${this.API_URI}/trabajos/${idTrabajo}`);
  }

  saveTrabajo(trabajos: Trabajo) {
    return this.http.post(`${this.API_URI}/trabajos`, trabajos);
  }

  updateTrabajo(idTrabajo: string|number, updateTrabajo: Trabajo): Observable<Trabajo> {
    return this.http.put(`${this.API_URI}/trabajos/${idTrabajo}`, updateTrabajo);
  }
}
