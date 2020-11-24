import { Title } from '@angular/platform-browser';

export interface Trabajo {
    idTrabajo?: number,
    nombreTrabajo?: string,
    descTrabajo?: string,
    pagoTrabajo?: number,
    estado?: string,
    fechaInicio?: Date,
    fechaFinal?: Date,
    plazoPostulacion?: Date,
    distrito?: string,
    direccion?: string,
    dniEmpleador?: number
};