import { Request, Response } from 'express';
import pool from '../database';

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const usuario = await pool.query('SELECT * FROM usuario');
        res.json(usuario);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const usuario = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);
        console.log(usuario.length);
        if (usuario.length > 0) {
            return res.json(usuario[0]);
        }
        res.status(404).json({ text: "El Usuario no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({ message: 'Guardar Usuario' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldUsuario = req.body;
        await pool.query('UPDATE usuario set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "El Usuario a sido actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM usuario WHERE id = ?', [id]);
        res.json({ message: "El usuario ha sido eliminado" });
    }
}

const usuariosController = new UsuariosController;
export default usuariosController;