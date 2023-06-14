import { Request, Response } from "express";
import orderService from "../../service/order.service";
import { abort } from "../../helper/error";

export async function getOrderDetailById(req: Request, res: Response) {
    try {
        const { orderId } = req.params;

        const parserId = parseInt(orderId as string);
        console.log(parserId);
        const result = await orderService.getOrderDetailById(parserId);

        return res.status(200).send({
            message: "Get order detail by id successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
};