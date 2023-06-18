"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Cloudinary configuration
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
function uploadImage(localFilePath, fileName) {
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