import userService from "../../service/user.service";
import { Response, Request } from "express";
import { abort } from "../../helper/error";

export async function deleteUser (req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parsedId = parseInt(id as string, 10);

        const user = await userService.deleteUser(parsedId);

        return res.status(200).send({
            message: 'Delete successfully',
            data: user
        });
    } catch(error: any) {
        return abort(500, error.message);
    }
}