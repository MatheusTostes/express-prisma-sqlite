import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/user', (req, res) => {
  res.status(200).json({ message: 'user' });
});

export default userRoutes;
