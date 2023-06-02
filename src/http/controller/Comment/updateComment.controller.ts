import commentService from "../../service/comment.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function updateComment(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parserId = parseInt(id);

        const { content } = req.body;

        const data = await commentService.updateComment(parserId, content);

        return res.status(200).send({
            message: "Update comment successfully",
            data: data
        });
    } catch (error: any) {
        return abort(error.status, error.message);
    } 
}