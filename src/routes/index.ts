import { Router } from 'express';
import userRoutes from './userRoutes';
import githubRoutes from './githubRoutes';
import mediaRoutes from './mediaRoutes';

const routes = Router();

routes.use(userRoutes);
routes.use(githubRoutes);
routes.use(mediaRoutes);

export default routes;
