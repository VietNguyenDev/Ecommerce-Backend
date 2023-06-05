import { Request, Response } from "express";
import cartService from '../../service/cart.service';
import { abort } from '../../helper/error';

export async function deleteCart(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const parserId = parseInt(id as string);
        const result = await cartService.deleteCart(parserId);
        res.status(200).send({
            message: "Delete cart successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
};