import { Request, Response, NextFunction } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { logger } from '@utils/logger';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): Response {
    if (err.message) {
        const statusCode = StatusCodes.BAD_REQUEST;
        logger.error(err, statusCode);
        return res.status(statusCode).send({ error: err.message });
    } else {
        const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        logger.error(err, statusCode);
        return res.status(statusCode).send({ error: getReasonPhrase(statusCode) });
    }
}

export { errorHandler };
