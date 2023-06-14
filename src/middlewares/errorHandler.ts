import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../errors';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);

  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).send({
      message: err.message,
    });
  }

  res.status(500).send('Erro inesperado.');
}
