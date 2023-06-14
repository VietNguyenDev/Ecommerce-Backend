import { Request, Response } from "express";
import orderService from "../../service/order.service";
import { abort } from "../../helper/error";

export async function getAllOrdersByUserId(req: Request, res: Response) {
    try {
        const {userId} = req.params;
        const { page, limit, sortBy } = req.query;

        const parserPage = parseInt(page as string);
        const parserLimit = parseInt(limit as string);
        const parserUserId = parseInt(userId as string);
        const parserSortBy = sortBy as string;

        const result = await orderService.getAllOrdersByUserId({page: parserPage, limit: parserLimit, userId: parserUserId, sortBy: parserSortBy});

        return res.status(200).send({
            message: "Get all orders by user id successfully",
            result: result,
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
};