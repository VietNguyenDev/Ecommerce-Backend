import { v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

//Configuration

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});

//upload

function uploadImage(localFilePath: string, fileName: string) {
    // filePathOnCloudinary: path of image we want
    // to set when it is uploaded to cloudinary
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