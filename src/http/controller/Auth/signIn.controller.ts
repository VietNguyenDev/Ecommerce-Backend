import { Request, Response } from "express";
import Joi from "joi";
import authService from "../../service/auth.service";
import { abort } from "../../helper/error";

async function validate(email: string, password: string) {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        });

        return schema.validateAsync({ email, password });
    } catch (error: any) {
        return abort(400, 'Validate error');
    }
}
 
export async function signIn(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        await validate(email, password);

        const data = await authService.signIn(email, password);

        return res.status(200).json({
            message: 'User created successfully',
            data: data
        });
    } catch (error: any) {
        return abort(error.status, error.message);
    }
};