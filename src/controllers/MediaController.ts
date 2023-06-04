import { Request, Response } from 'express';

interface CustomRequest extends Request {
  filePath?: string;
}

export const upload = async (req: Request, res: Response) => {
  const media = req.file as Express.Multer.File;

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
