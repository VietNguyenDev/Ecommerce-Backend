import { Request, Response } from "express";
import orderService from "../../service/order.service";
import { abort } from "../../helper/error";

export async function updateStatus(req: Request, res: Response) {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const parserId = parseInt(orderId as string);
        const result = await orderService.updateStatus({orderId: parserId, status: status});

        return res.status(200).send({
            message: "Update status successfully",
            result: result,
        });

    } catch(error: any) {
        return abort(error.status, error.message);
    }
}