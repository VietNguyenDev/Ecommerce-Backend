import { Request, Response } from "express";
import Joi from "joi";
import shippingService from "../../service/shipping.service";
import { abort } from "../../helper/error";

async function validate(userId: number, fullName: string, address: string, province: string, district: string, ward: string, postcode: string, phone: string) {
    try {
        const schema = Joi.object({
            userId: Joi.number().min(0).required(),
            fullName: Joi.string().required(),
            address: Joi.string().required(),
            province: Joi.string().required(),
            district: Joi.string().required(),
            ward: Joi.string().required(),
            postcode: Joi.string().required(),
            phone: Joi.string().required(),
        });

        return schema.validateAsync({ userId, fullName, address, province, district, ward, postcode, phone });
    } catch(error: any) {
        return abort(400, 'Validate error');
    }
}

export async function createShipping(req: Request, res: Response) {
    try {
        const { userId, fullName, address, province, district, ward, postcode, phone } = req.body;
        await validate(userId, fullName, address, province, district, ward, postcode, phone);
        const data = await shippingService.createShipping({userId, fullName, address, province, district, ward, postcode, phone});

        return res.status(200).send({
            message: "Create shipping successfully",
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}
