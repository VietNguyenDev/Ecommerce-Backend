import shippingService from "../../service/shipping.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function updateShipping(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parserId = parseInt(id);

        const { userId, fullName, address, province, district, ward, postcode, phone } = req.body;

        const data = await shippingService.updateShipping(parserId, {userId, fullName, address, province, district, ward, postcode, phone});

        return res.status(200).send({
            message: "Update shipping successfully",
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}