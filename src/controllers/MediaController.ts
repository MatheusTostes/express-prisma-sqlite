import { Request, Response } from 'express';

interface CustomRequest extends Request {
  filePath?: string;
}

export const upload = async (req: Request, res: Response) => {
  const media = req.file as Express.Multer.File;

  // if size > 5MB or < 1kb return error
  if (media.size > 5 * 1024 * 1024 || media.size < 1 * 1024) {
    return res.status(400).json({ message: 'INVALID_FILE_SIZE' });
  }

  if (!media) {
    return res.status(400).json({ message: 'MEDIA_NOT_FOUND' });
  }

  return res.status(200).json({ media });
};

export const download = async (req: CustomRequest, res: Response) => {
  const { filePath } = req;

  if (!filePath) {
    return res.status(400).json({ message: 'MEDIA_NOT_FOUND' });
  }

  return res.download(filePath, error => {
    if (error) {
      console.error(error);
      res.status(404).send('MEDIA_NOT_FOUND');
    }
  });
};
