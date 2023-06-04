import { NextFunction, Request, Response } from 'express';

const maxFileSize = 5 * 1024 * 1024; // 5MB
const minFileSize = 1 * 1024; // 1KB

const checkMediaSizeMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const contentLength = Number(req.headers['content-length']);

  if (
    contentLength &&
    (contentLength > maxFileSize || contentLength < minFileSize)
  ) {
    return res.status(400).json({ message: 'INVALID_FILE_SIZE' });
  }

  return next();
};

export default checkMediaSizeMiddleware;
