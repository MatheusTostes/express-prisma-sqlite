import express, { Application } from 'express';

const app: Application = express();
const port = 8080;

app.use('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
