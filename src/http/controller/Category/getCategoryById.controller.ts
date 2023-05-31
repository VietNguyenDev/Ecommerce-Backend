import categoriesService from "../../service/categories.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";

export async function getCategoryById(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parseId = parseInt(id);
        const category = await categoriesService.getCategoryById(parseId);

        res.status(200).json(category);
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}