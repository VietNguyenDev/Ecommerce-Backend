import multer from "multer";
import { Request } from "express";

async function checkFileType(file: Express.Multer.File, cb: any) {
    const filetypes = /jpeg|jpg|png|svg|glb/;
    const extname = filetypes.test(file.originalname.toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

const storage = multer.diskStorage({
    destination: function(req: Request, file: Express.Multer.File, cb: any) {
        cb(null, './public/images');
    },

    filename: function(req: Request, file: Express.Multer.File, cb: any) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req: Request, file: Express.Multer.File, cb: any) {
        checkFileType(file, cb);
    }
});

export default upload;