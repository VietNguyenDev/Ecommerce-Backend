import { Request, Response } from "express";
import Joi from "joi";
import categoriesService from "../../service/categories.service";
import { abort } from "../../helper/error";

async function validate(categoryName: string) {
    try {
        const schema = Joi.object({
            categoryName: Joi.string().required(),
        });
        return schema.validateAsync({ categoryName });
    } catch(error: any) {
        return abort(400, 'Validate error');
    }
}
    


export async function createCategory(req: Request, res: Response) {
    try {
        const { categoryName } = req.body;
        await validate(categoryName);

        const category = await categoriesService.createCategory({ categoryName });

        return res.status(200).send({
            message: 'Create category successfully',
            data: category
        });
    } catch (error: any) {
        return abort(500, error.message);
    }
}