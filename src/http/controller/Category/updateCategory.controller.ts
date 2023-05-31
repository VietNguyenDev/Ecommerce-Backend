import categoriesService from "../../service/categories.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";

export async function updateCategory(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { categoryName } = req.body;

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