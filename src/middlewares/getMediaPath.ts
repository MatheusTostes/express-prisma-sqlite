import { Request, Response, NextFunction } from 'express';
import path from 'path';

interface CustomRequest extends Request {
  filePath?: string;
}

const publicPath = path.resolve(__dirname, '..', '..', 'public');

const getMediaPath = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
): void => {
  const { filename } = req.params;
  const filePath = path.join(publicPath, filename);

  req.filePath = filePath;

  next();
};

export default getMediaPath;
