import shippingService from "../../service/shipping.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function createShipping(req: Request, res: Response) {
    try {
        const { userId, fullName, address, province, district, ward, postcode, phone } = req.body;

        const data = await shippingService.createShipping({userId, fullName, address, province, district, ward, postcode, phone});

        return res.status(200).send({
            message: "Create shipping successfully",
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}
