import { Request, Response } from "express";
import Joi from "joi";
import categoriesService from "../../service/categories.service";
import { abort } from "../../helper/error";

async function validate(categoryName:string) {
    try {
        const schema = Joi.object({
            categoryName: Joi.string().required(),
        });
        return schema.validateAsync({ categoryName });
    } catch(error: any) {
        return abort(400, 'Validate error');
    }
}

export async function updateCategory(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { categoryName } = req.body;
        await validate(categoryName);

        const parseId = parseInt(id);
        const data = await categoriesService.updateCategory(parseId, { categoryName });

        return res.status(200).send({
            message: 'Update data successfully',
            data: data
        });
    } catch(error: any) {
        return abort(500, error.message);
    }
}