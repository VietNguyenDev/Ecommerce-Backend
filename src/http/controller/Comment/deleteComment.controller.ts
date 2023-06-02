import commentService from "../../service/comment.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function deleteComment(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parserId = parseInt(id);

        const data = await commentService.deleteComment(parserId);

        return res.status(200).send({
            message: "Delete comment successfully",
            data: data
        });
    } catch (error: any) {
        return abort(error.status, error.message);
    }
}