import { Request, Response, NextFunction } from 'express';

export function checkParamsId(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
        next();
    } else {
        const err = new Error('ID is not provided');
        next(err);
    }
}
