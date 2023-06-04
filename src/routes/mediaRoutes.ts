import { Router } from 'express';
import multer from 'multer';
import getMediaPath from '../middlewares/getMediaPath';
import uploadConfig from '../config/upload';
import * as MediaController from '../controllers/MediaController';
import checkMediaSizeMiddleware from '../middlewares/checkMediaSizeMiddleware';

const upload = multer(uploadConfig);

const mediaRoutes = Router();

mediaRoutes.post(
  '/media',
  checkMediaSizeMiddleware,
  upload.single('file'),
  MediaController.upload,
);

mediaRoutes.get('/media/:filename', getMediaPath, MediaController.download);

export default mediaRoutes;
