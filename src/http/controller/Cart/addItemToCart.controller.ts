import { Request, Response } from "express";
import cartService from '../../service/cart.service';
import { abort } from '../../helper/error';

export async function addItemToCart(req: Request, res: Response) {
    try {
        const { productId, userId, quantity, productSize, productColor } = req.body;
        const result = await cartService.addItemToCart({productId, userId, quantity, productSize, productColor});
        res.status(200).send({
            message: "Add item to cart successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}