import { Router } from 'express';
import userRoutes from './userRoutes';
import githubRoutes from './githubRoutes';

const routes = Router();

routes.use(userRoutes);
routes.use(githubRoutes);

export default routes;
