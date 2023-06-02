import commentService from "../../service/comment.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function createComment(req: Request, res: Response) {
    try {
        const { userId, productId, content } = req.body;

        const data = await commentService.createComment({userId, productId, content});

        return res.status(200).send({
            message: "Create comment successfully",
            data: data
        }) 
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}