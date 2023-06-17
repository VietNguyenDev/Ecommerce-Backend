import { Request, Response } from "express";
import Joi from "joi";
import productService from "../../service/product.service";
import { abort } from "../../helper/error";
import Product from "../../model/product.model";
import uploadImage from "../../config/cloudinary"

async function validate(productName: string, productCode: string, productImg: string, productSize: string, productColor: string, originalPrice: number, discount: number, productDescription: string) {
    try {
        const schema = Joi.object({
            productName: Joi.string().required(),
            productCode: Joi.string().required(),
            productImg: Joi.string().required(),
            productSize: Joi.string().required(),
            productColor: Joi.string().required(),
            originalPrice: Joi.number().min(0).required(),
            discount: Joi.number().min(0).required(),
            productDescription: Joi.string().required(),
        });

        return schema.validateAsync({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription });
    } catch (error: any) {
        return abort(400, 'Validate error');
    }
}

export async function createProduct(req: Request, res: Response) {
    try {
        const file = req.files as Express.Multer.File[];
        const productImg: string = await uploadImage(file[0]?.path, file[0].filename) as string;
        const { productName, productCode, productSize, productColor, originalPrice, discount, productDescription } = req.body;
        await validate(productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription);
        const data: Product = await productService.createProduct({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription });

        return res.status(200).send({
            message: 'Create data successfully',
            data: data
        });
    } catch (error: any) {
        return abort(500, error.message);
    }
}