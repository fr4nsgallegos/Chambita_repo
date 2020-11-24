import { Request, Response } from 'express';
import pool from '../database';

class TrabajosController {

    public async list(req: Request, res: Response): Promise<void> {
        const trabajos = await pool.query('SELECT * FROM trabajos');
        res.json(trabajos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { idTrabajo } = req.params;
        const trabajo = await pool.query('SELECT * FROM trabajos WHERE idTrabajo = ?', [idTrabajo]);
        console.log(trabajo.length);
        if (trabajo.length > 0) {
            return res.json(trabajo[0]);
        }
        res.status(404).json({ text: "El Trabajo no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO trabajos set ?', [req.body]);
        res.json({ message: 'Guardar Trabajo' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { idTrabajo } = req.params;
        const oldTrabajos = req.body;
        await pool.query('UPDATE trabajos set ? WHERE idTrabajo = ?', [req.body, idTrabajo]);
        res.json({ message: "El Trabajo a sido actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { idTrabajo } = req.params;
        await pool.query('DELETE FROM trabajos WHERE idTrabajo = ?', [idTrabajo]);
        res.json({ message: "El Trabajo ha sido eliminado" });
    }
}

const trabajosController = new TrabajosController;
export default trabajosController;