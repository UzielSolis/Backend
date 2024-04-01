import { Request } from 'express';
import multer from 'multer';
import multers3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';

const s3 = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
    }
});

const s3Storage = multers3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'public-read',
    metadata: (req, file, cb) => {
        cb(null, { ...file });
    },
    key: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: s3Storage
})

export default upload;