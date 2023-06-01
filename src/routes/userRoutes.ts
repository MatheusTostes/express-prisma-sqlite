import { Router } from 'express';
import * as UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.post('/user', UserController.createService);
userRoutes.put('/user/:id', UserController.updateService);

export default userRoutes;
