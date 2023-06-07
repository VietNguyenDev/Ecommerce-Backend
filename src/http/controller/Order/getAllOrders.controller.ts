import { Request, Response } from "express";
import orderService from "../../service/order.service";
import { abort } from "../../helper/error";

export async function getAllOrders(req: Request, res: Response) {
    try {
        const { page, limit } = req.query;

        const parserPage = parseInt(page as string);
        const parserLimit = parseInt(limit as string);

        const result = await orderService.getAllOrders({page: parserPage, limit: parserLimit});

        return res.status(200).send({
            message: "Get all orders successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
};