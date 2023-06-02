import favoriteService from "../../service/favorite.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function getFavoriteByUserId(req: Request, res: Response) {
    try {
        const { userId } = req.params;

        const parserUserId = parseInt(userId);

        const data = await favoriteService.getFavoriteByUserId(parserUserId);

        return res.status(200).json({
            message: "Get favorite by user id successfully",
            data: data
        });
    } catch(error: any) {
        return abort(error .status, error.message);
    }
}