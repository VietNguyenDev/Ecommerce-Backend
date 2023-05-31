import categoriesService from "../../service/categories.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";

export async function createCategory(req: Request, res: Response) {
    try {
        const { categoryName } = req.body;

        const category = await categoriesService.createCategory({ categoryName });

        return res.status(200).send({
            message: 'Create category successfully',
            data: category
        });
    } catch (error: any) {
        return abort(500, error.message);
    }
}