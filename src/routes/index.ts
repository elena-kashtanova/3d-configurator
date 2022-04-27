import { Router, Request, Response } from 'express';
import modelRouter from './model.router';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send('Home');
});
router.use('/models', modelRouter);

export default router;
