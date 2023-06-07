import { Request, Response } from "express";
import orderService from "../../service/order.service";
import { abort } from "../../helper/error";

export async function createOrder(req: Request, res: Response) {
    try {
        const { userId } = req.params;
        const { shippingId, cartItems, paymentMethod, paymentMethodTitle } = req.body;
        const parserId = parseInt(userId as string);

        const result = await orderService.createOrder({userId: parserId, data: {shippingId, cartItems, paymentMethod, paymentMethodTitle}});

        return res.status(200).send({
            message: "Create order successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}