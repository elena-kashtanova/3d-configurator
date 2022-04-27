import { Request, Response, NextFunction } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).send({ error: getReasonPhrase(statusCode) });
}

export { errorHandler };
