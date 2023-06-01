import userService from "../../service/user.service";
import { Request, Response } from "express";
import { abort } from "../../helper/error";

export async function updateUser(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parsedId = parseInt(id as string, 10);

        const { fullName, phoneNumber, dateOfBirth, address, gender, image } = req.body;

        const data = await userService.updateUser(parsedId, { fullName, phoneNumber, dateOfBirth, address, gender, image});

        return res.status(200).send({
            message: 'Update successfully',
            data: data
        })
    } catch(error: any) {
        return abort(500, error.message)
    }
}