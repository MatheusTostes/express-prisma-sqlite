import { NextFunction, Request, Response } from 'express';

const checkMediaSizeMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const contentLength = Number(req.headers['content-length']);

  if (
    contentLength &&
    (contentLength > 5 * 1024 * 1024 || contentLength < 1 * 1024)
  ) {
    return res.status(400).json({ message: 'INVALID_FILE_SIZE' });
  }

  return next();
};

export default checkMediaSizeMiddleware;
