import { Router } from 'express';
import checkDataUserMiddleware from '../middlewares/checkDataUserMiddleware';
import * as UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.get('/user', UserController.listUsers);

userRoutes.get('/user/:id', UserController.showUser);

userRoutes.delete('/user/:id', UserController.deleteUser);

userRoutes.post('/user', checkDataUserMiddleware, UserController.createService);

userRoutes.put(
  '/user/:id',
  checkDataUserMiddleware,
  UserController.updateService,
);

export default userRoutes;
