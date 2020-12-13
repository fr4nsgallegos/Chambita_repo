import { Title } from '@angular/platform-browser';

export interface TrabajoDetalles {
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
    nombre?: string,
    apellido?: string,
    numTelefono?: number,
    correo?: string
};