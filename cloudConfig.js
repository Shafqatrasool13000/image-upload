import { v2 as cloudinary } from 'cloudinary';

export const cloundinaryconfig = cloudinary.config({
    cloud_name: 'dvyzdaktj',
    api_key: '287193912617465',
    api_secret: 'KfgXApsA-q21iq7gBlvTl_5Vb3A'
});

const S3 = new aws.S3({
    accessKeyId: 'AKIA6HNFY6XLCTANXVHQ',
    secretAccessKey: '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',
    region: 'Europe (Stockholm) eu-north-1'
});