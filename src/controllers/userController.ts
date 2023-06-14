import { Request, Response } from 'express';
import { userService } from '../services/userService';
import { UserType } from '../types/userTypes';

const getUser = (req: Request, res: Response) => {
  const name = req.query.name as string;

  const user = userService.getUser(name);

  res.status(200).send(user);
};

const getUsers = (_req: Request, res: Response) => {
  const users = userService.getUsers();

  res.status(200).send(users);
};

const createUser = (req: Request, res: Response) => {
  const user = req.body;

  const newUser = userService.createUser(user);

  res.status(201).send(newUser);
};

const removeUser = (req: Request, res: Response) => {
  const name = req.query.name as string;

  userService.removeUser(name);

  res.sendStatus(204);
};

const updateUser = (req: Request, res: Response) => {
  const id = req.query.id as string;
  const userData: UserType = req.body;

  const updatedUser = userService.updateUser(id, userData);

  res.status(200).send(updatedUser);
};

const getReadCount = (req: Request, res: Response) => {
  const name = req.query.name as string;

  const readCount = userService.getReadCount(name);

  res.status(200).send(readCount);
};

export const userController = {
  getUser,
  getUsers,
  createUser,
  removeUser,
  updateUser,
  getReadCount,
};
