import { Router, Request, Response } from 'express';
import multer, { FileFilterCallback } from 'multer';

type File = {
    originalname: string,
    mimetype: string,
    size: number
}

const router = Router();

const storage = multer.diskStorage({
    filename: (req: Request, file, cb) => {
        cb(null, file.originalname);
    },
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    }
});

const fileFilter = (req: Request, file: File, cb: FileFilterCallback) => {
    const isValid = file.mimetype.startsWith('image/');
    cb(null, isValid);
}

const upload = multer({
    storage,
    fileFilter
});

router.get('', (req: Request, res: Response) => {
    res.send('api works');
});

router.post('/upload',upload.single('foto'), (req: Request, res: Response) => {
    console.log('File: ', req.file);
    res.send('endpoint para subir archivo');
});

export default router;