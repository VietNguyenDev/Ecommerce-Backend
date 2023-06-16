"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
//Configuration
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
//upload
function uploadImage(localFilePath, fileName) {
    // filePathOnCloudinary: path of image we want
    // to set when it is uploaded to cloudinary
    return new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader.upload(localFilePath, { public_id: fileName }, (err, result) => {
            if (err) {
                fs_1.default.unlinkSync(localFilePath);
                reject(err);
            }
            else {
                fs_1.default.unlinkSync(localFilePath);
                resolve(result);
            }
        });
    });
}
exports.default = uploadImage;
//# sourceMappingURL=cloudinary.js.map