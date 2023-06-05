import { Request, Response } from "express";
import cartService from '../../service/cart.service';
import { abort } from '../../helper/error';

export async function updateCart(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const parserId = parseInt(id as string);
        const { productId, userId, quantity, productSize, productColor } = req.body;
        const result = await cartService.updateCart(parserId, {productId, userId, quantity, productSize, productColor});
        res.status(200).send({
            message: "Update cart successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
};