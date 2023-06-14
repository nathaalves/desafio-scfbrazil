import { Request, Response, NextFunction } from 'express';

const valildateUserPermission = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;
  const token = authorization?.split(' ')[1];

  if (token !== 'access-token') {
    return res.sendStatus(401);
  }

  next();
};

export const authMiddleware = {
  valildateUserPermission,
};
