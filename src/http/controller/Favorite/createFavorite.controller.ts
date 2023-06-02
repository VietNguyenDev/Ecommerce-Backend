import favoriteService from "../../service/favorite.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function createFavorite(req: Request, res: Response) {
    try {
        const { userId, productId } = req.body;

        const data = await favoriteService.createFavorite({userId, productId});

        return res.status(200).json({
            message: "Create favorite successfully",
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}