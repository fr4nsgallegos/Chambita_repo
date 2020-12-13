import { Router } from 'express';
import TrabajoDetallesController from '../controllers/trabajoDetallesController';


class TrabajoDetallesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:idTrabajo', TrabajoDetallesController.getOne);
    }
}

const trabajoDetallesRoutes = new TrabajoDetallesRoutes();
export default trabajoDetallesRoutes.router;