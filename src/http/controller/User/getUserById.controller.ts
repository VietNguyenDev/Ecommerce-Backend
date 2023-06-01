import userService from "../../service/user.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function getUserById(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parsedId = parseInt(id as string, 10);

        const user = await userService.getUserById(parsedId);

        return res.status(200).json(user);
    } catch (error: any) {
        return abort(400, error.message);
    }
}