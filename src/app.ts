import express, { Application } from 'express';
import 'express-async-errors';
import cors from 'cors';
import uploadConfig from './config/upload';
import routes from './routes';

const app: Application = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }),
);
app.use(express.json());

app.use('/public', express.static(uploadConfig.directory));

app.use('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

app.use(routes);

export default app;
