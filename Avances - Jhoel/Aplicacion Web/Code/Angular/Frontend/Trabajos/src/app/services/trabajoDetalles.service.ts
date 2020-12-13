import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrabajoDetalles } from '../models/TrabajoDetalles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TrabajoDetallesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTrabajos() {
    return this.http.get(`${this.API_URI}/trabajos`);
  }

  getTrabajo(idTrabajo: string) {
    return this.http.get(`${this.API_URI}/trabajos/${idTrabajo}`);
  }
}
