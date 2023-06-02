import { Request, Response } from "express";
import Joi from "joi";
import commentService from "../../service/comment.service";
import { abort } from "../../helper/error";

async function validate(userId: number, productId: number, content: Text) {
    try {
        const schema = Joi.object({
            userId: Joi.number().required(),
            productId: Joi.number().required(),
            content: Joi.string().required(),
        });

        return schema.validateAsync({ userId, productId, content });
    } catch(error: any) {
        return abort(400, 'Validate error');
    }
}

export async function createComment(req: Request, res: Response) {
    try {
        const { userId, productId, content } = req.body;

        await validate(userId, productId, content);

        const data = await commentService.createComment({userId, productId, content});

        return res.status(200).send({
            message: "Create comment successfully",
            data: data
        }) 
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}