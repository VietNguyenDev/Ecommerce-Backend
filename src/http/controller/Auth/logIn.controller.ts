import { Request, Response } from 'express';
import Joi from 'joi';
import { abort } from '../../helper/error';
import authService from '../../service/auth.service';

async function validate(email: string, password: string) {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        });

        return schema.validateAsync({ email, password });
    } catch(error: any) {
        return abort(400, 'Validate error');
    }
}

export async function logIn(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        await validate(email, password);

        const data = await authService.logIn(email, password);

        return res.status(200).json({
            message: 'User logged in successfully',
            data: data
        });
    } catch(error: any) {
        return abort(error.status, error.message);
    }
};