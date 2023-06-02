import favoriteService from "../../service/favorite.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function deleteFavorite(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parserId = parseInt(id);

        const data = await favoriteService.deleteFavorite(parserId);

        return res.status(200).send({
            message: "Delete favorite successfully",
            data: data
        });
        
    } catch(error: any) {
        return abort(error.status, error.message);
    }
}