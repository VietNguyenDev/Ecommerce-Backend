import userService from "../../service/user.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function getAllUser(req: Request, res: Response) {
    try {
        const users = await userService.getAllUser();

        return res.status(200).json(users);
    } catch (error: any) {
        return abort(400, error.message);
    }
}
    