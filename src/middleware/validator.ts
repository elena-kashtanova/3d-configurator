import { Request, Response, NextFunction } from 'express';

export function isIdProvided(req: Request, res: Response, next: NextFunction) {
    if (req.query.id) {
        next();
    } else {
        const err = new Error('Invalid ID');
        next(err);
    }
}
