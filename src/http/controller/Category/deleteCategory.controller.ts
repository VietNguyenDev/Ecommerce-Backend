import categoriesService from "../../service/categories.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";

export async function deleteCategory(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parseId = parseInt(id);

        const data = await categoriesService.deleteCategory(parseId);

        return res.status(200).send({
            message: 'Delete data successfully',
            data: data
        });
    } catch(error: any) {
        return abort(500, error.message);
    }
}