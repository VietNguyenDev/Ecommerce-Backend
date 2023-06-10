import db from "../model";
import bcrypt from "bcrypt";
import { abort } from "../helper/error";
import { generateToken } from "../helper/jwt";

async function signIn(email: string, password: string) {
    try {
        const findUser = await db.models.User.findOne({where: {email: email}});

        if(findUser) {
            return abort(400, 'Email already exists')
        }

        const salt = parseInt(process.env.SALT as string, 10);
        const hashPassword = await bcrypt.hash(password, salt);

        const data = await db.models.User.create({
            email, 
            password: hashPassword, 
            role: 2, 
            refreshToken: process.env.REFRESH_TOKEN as string
        });

        return data;
    } catch (error: any) {
        return abort(500, error.message);
    }
};

async function logIn(email: string, password: string) {
    try {
        const findUser = await db.models.User.findOne({where: {email: email}});

        if(!findUser) {
            return abort(400, 'Email not found')
        }

        const isMatch = await bcrypt.compare(password, findUser.password);

        if(!isMatch) {
            return abort(400, 'Password is incorrect')
        }

        const accessToken = await generateToken({id: findUser.id});

        return accessToken;
    } catch (error: any) {
        return abort(500, error.message);
    }
};

export default { signIn, logIn };