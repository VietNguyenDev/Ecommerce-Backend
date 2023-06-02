import { Request, Response } from "express";
import Joi from "joi";
import commentService from "../../service/comment.service";
import { abort } from "../../helper/error";

async function validate(content: Text) {
    try {
        const schema = Joi.object({
            content: Joi.string().required(),
        });
    
        return schema.validateAsync({ content });
    } catch(error: any) {
        return abort(400, 'Validate error');
    }
}

export async function updateComment(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parserId = parseInt(id);

        const { content } = req.body;

        await validate(content);
        const data = await commentService.updateComment(parserId, content);

        return res.status(200).send({
            message: "Update comment successfully",
            data: data
        });
    } catch (error: any) {
        return abort(error.status, error.message);
    } 
}