import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});

function uploadImage(localFilePath: string, fileName: string) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(localFilePath, { public_id: fileName }, (err, result) => {
            if (err) {
                fs.unlinkSync(localFilePath);
                reject(err);
            } else {
        
                fs.unlinkSync(localFilePath);
                resolve(result);
            }
        });
    });   
}

export default uploadImage;