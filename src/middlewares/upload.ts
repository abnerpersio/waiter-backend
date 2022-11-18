import multer from 'multer';
import path from 'node:path';

export const upload = multer({
  storage: multer.diskStorage({
    destination(_, __, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(_, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});
