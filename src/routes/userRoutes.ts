import { Router } from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const userRouter = Router();

userRouter.get('/user', userController.getUser);
userRouter.get('/users', userController.getUsers);
userRouter.post('/user', userController.createUser);
userRouter.delete(
  '/user',
  authMiddleware.valildateUserPermission,
  userController.removeUser
);
userRouter.put(
  '/user',
  authMiddleware.valildateUserPermission,
  userController.updateUser
);
userRouter.get('/user/access', userController.getReadCount);

export { userRouter };
