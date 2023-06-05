import { Request, Response } from "express";
import cartService from '../../service/cart.service';
import { abort } from '../../helper/error';

export async function emptyCart(req: Request, res: Response) {
    try {
        const { userId } = req.params;

        const parserId = parseInt(userId as string);

        const result = await cartService.emptyCart(parserId);

        res.status(200).send({
            message: "Empty cart successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}