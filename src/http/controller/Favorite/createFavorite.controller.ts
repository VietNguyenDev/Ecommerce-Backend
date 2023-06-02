import { Request, Response } from "express";
import Joi from "joi";
import favoriteService from "../../service/favorite.service";
import { abort } from "../../helper/error";

async function validate(userId: number, productId: number) {
    try {
        const schema = Joi.object({
            userId: Joi.number().required(),
            productId: Joi.number().required(),
        });

        return schema.validateAsync({ userId, productId });
    } catch (error: any) {
        return abort(400, 'Validate error');
    }
}

export async function createFavorite(req: Request, res: Response) {
    try {
        const { userId, productId } = req.body;
        await validate(userId, productId);
        const data = await favoriteService.createFavorite({userId, productId});

        return res.status(200).json({
            message: "Create favorite successfully",
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}