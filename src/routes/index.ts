import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import modelRouter from './model.router';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Home');
});
router.use('/models', modelRouter);

export default router;
