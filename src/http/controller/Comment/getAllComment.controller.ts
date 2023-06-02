import commentService from "../../service/comment.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function getCommentByProductId(req: Request, res: Response) {
    try {
        const { productId } = req.params;

        const parserProductId = parseInt(productId);

        const data = await commentService.getCommentByProductId(parserProductId);

        return res.status(200).json({
            message: `Get comment by product id ${parserProductId}`,
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}