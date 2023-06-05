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
};

export async function updateCart(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const parserId = parseInt(id as string);
        const { productId, userId, quantity, productSize, productColor } = req.body;
        await validate(productId, userId, quantity, productSize, productColor);
        const result = await cartService.updateCart(parserId, {productId, userId, quantity, productSize, productColor});
        res.status(200).send({
            message: "Update cart successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
};