import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.send('Hello Word');
    }
}

export const indexController = new IndexController;