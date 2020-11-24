import { Router } from 'express';
import UsuariosController from '../controllers/usuariosController';


class UsuariosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', UsuariosController.list);
        this.router.get('/:id', UsuariosController.getOne);
        this.router.post('/', UsuariosController.create);
        this.router.put('/:id', UsuariosController.update);
        this.router.delete('/:id', UsuariosController.delete);
    }

}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;