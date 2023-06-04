import path from 'path';
import multer from 'multer';

const publicPath = path.resolve(__dirname, '..', '..', 'public');

export default {
  directory: publicPath,

  storage: multer.diskStorage({
    destination: publicPath,
    filename(req, file, cb) {
      const newFilename = `${new Date()
        .getTime()
        .toString()}_${file.originalname
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ /g, '_')}`;

      return cb(null, newFilename);
    },
  }),
};
