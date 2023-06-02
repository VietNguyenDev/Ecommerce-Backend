import { Request, Response } from "express";
import Joi from "joi";
import userService from "../../service/user.service";
import { abort } from "../../helper/error";

async function validate(fullName: string, phoneNumber: string, dateOfBirth: Date, address: string, gender: number, image: string) {
    try {
        const schema = Joi.object({
            fullName: Joi.string().required(),
            phoneNumber: Joi.string().required(),
            dateOfBirth: Joi.date().required(),
            address: Joi.string().required(),
            gender: Joi.number().min(1).max(2).required(),
            image: Joi.string().required(),
        });

        return schema.validateAsync({fullName, phoneNumber, dateOfBirth, address, gender, image});
    }  catch(error: any) {
        return abort(400, 'Validate error');
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parsedId = parseInt(id as string, 10);

        const { fullName, phoneNumber, dateOfBirth, address, gender, image } = req.body;
        await validate(fullName, phoneNumber, dateOfBirth, address, gender, image)

        const data = await userService.updateUser(parsedId, { fullName, phoneNumber, dateOfBirth, address, gender, image});

        return res.status(200).send({
            message: 'Update successfully',
            data: data
        })
    } catch(error: any) {
        return abort(500, error.message)
    }
}