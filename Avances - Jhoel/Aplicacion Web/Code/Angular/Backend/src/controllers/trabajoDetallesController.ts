import { Request, Response } from 'express';
import pool from '../database';

class TrabajoDetallesController {


    public async getOne(req: Request, res: Response): Promise<any> {
        const { idTrabajo } = req.params;
        const trabajo = await pool.query('SELECT t.nombreTrabajo, t.descTrabajo, t.pagoTrabajo, t.estado, t.fechaInicio, t.fechaFinal, t.plazoPostulacion, t.distrito, t.direccion, e.nombre, e.apellido, e.numTelefono, e.correo FROM trabajos t INNER JOIN empleadores e ON t.dniEmpleador = e.dniEmpleador WHERE t.idTrabajo=?', [idTrabajo]);
        console.log(trabajo.length);
        if (trabajo.length > 0) {
            return res.json(trabajo[0]);
        }
        res.status(404).json({ text: "El Trabajo no existe" });
    }
}

const trabajoDetallesController = new TrabajoDetallesController;
export default trabajoDetallesController;