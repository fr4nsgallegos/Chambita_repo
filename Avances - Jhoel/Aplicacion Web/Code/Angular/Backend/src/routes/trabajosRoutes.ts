import { Router } from 'express';
import TrabajosController from '../controllers/trabajosController';


class TrabajosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', TrabajosController.list);
        this.router.get('/:idTrabajo', TrabajosController.getOne);
        this.router.post('/', TrabajosController.create);
        this.router.put('/:idTrabajo', TrabajosController.update);
        this.router.delete('/:idTrabajo', TrabajosController.delete);
    }
}

const trabajosRoutes = new TrabajosRoutes();
export default trabajosRoutes.router;