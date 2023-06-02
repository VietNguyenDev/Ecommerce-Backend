import shippingService from "../../service/shipping.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function getShippingByUserId(req: Request, res: Response) {
    try {
        const { userId } = req.params;

        const parserId = parseInt(userId);

        const data = await shippingService.getShippingByUserId(parserId);

        return res.status(200).send({
            message: "Get shipping by user id successfully",
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}