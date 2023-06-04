import { Router } from 'express';
import * as GithubController from '../controllers/GithubController';

const githubRoutes = Router();
githubRoutes.get('/github/:githubUser', GithubController.showUser);

export default githubRoutes;
