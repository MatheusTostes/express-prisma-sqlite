import { Router } from 'express';
import * as UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.post('/user', UserController.createService);
userRoutes.put('/user/:id', UserController.updateService);
userRoutes.get('/user', UserController.listUsers);
userRoutes.get('/user/:id', UserController.showUser);
userRoutes.delete('/user/:id', UserController.deleteUser);

export default userRoutes;
