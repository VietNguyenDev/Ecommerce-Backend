import { Request, Response } from "express";
import Joi from "joi";
import productService from "../../service/product.service";
import { abort } from "../../helper/error";
import uploadImage from "../../config/cloudinary";

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

export async function updateProduct(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const parseId = parseInt(id);
        const { file } = req;
        const productImage: any = await uploadImage(file?.path, file?.filename);
        const productImg = productImage.secure_url;
        const { productName, productCode, productSize, productColor, originalPrice, discount, productDescription } = req.body;
        await validate(productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription);

        const data = await productService.updateProduct(parseId, { productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription });

        return res.status(200).send({
            message: 'Update data successfully',
            data: data
        });
    } catch(error: any) {
        return abort(500, error.message);
    }
}