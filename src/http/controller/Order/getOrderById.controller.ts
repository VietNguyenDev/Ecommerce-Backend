import { Request, Response } from "express";
import orderService from "../../service/order.service";
import { abort } from "../../helper/error";

export async function getOrderById(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parserId = parseInt(id as string);

        const result = await orderService.getOrderById(parserId);

        return res.status(200).send({
            message: "Get order by id successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
};

