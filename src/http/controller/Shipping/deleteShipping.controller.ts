import shippingService from "../../service/shipping.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function deleteShipping(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parserId = parseInt(id);

        const data = await shippingService.deleteShipping(parserId);

        return res.status(200).send({
            message: "Delete shipping successfully",
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}