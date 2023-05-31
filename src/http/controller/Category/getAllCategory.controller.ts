import categoriesService from "../../service/categories.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";

export async function getAllCategories(req: Request, res: Response) {
    try {
        const categories = await categoriesService.getCategories();

        res.status(200).json({
            status: "success",
            data: categories
        });
    } catch (error: any) {
        return abort(error.status, error.message);
    }
}