import { Request, Response } from "express";
import Joi from "joi";
import cartService from '../../service/cart.service';
import { abort } from '../../helper/error';

async function validate(productId: string, userId: string, quantity: number, productSize: string, productColor: string) {
    try {
        const schema = Joi.object({
            productId: Joi.string().required(),
            userId: Joi.string().required(),
            quantity: Joi.number().required(),
            productSize: Joi.string().required(),
            productColor: Joi.string().required(),
        });
        return schema.validateAsync({ productId, userId, quantity, productSize, productColor });
    } catch(error: any) {
        return abort(400, 'Validate error');
    }
}

export async function addItemToCart(req: Request, res: Response) {
    try {
        const { productId, userId, quantity, productSize, productColor } = req.body;
        await validate(productId, userId, quantity, productSize, productColor);
        const result = await cartService.addItemToCart({productId, userId, quantity, productSize, productColor});
        res.status(200).send({
            message: "Add item to cart successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}