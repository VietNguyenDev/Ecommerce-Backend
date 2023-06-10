import { Request, Response, NextFunction } from "express";
import { Role } from "../enums/Role";
import { abort } from "../helper/error";
import db from "../model/db";

const permission = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body.user;

        const userModel = await db.models.User.findOne({ where: { id: user.id }, attributes: ['role'] });
        
        const role: number | null = userModel? userModel.getDataValue('role') : null;

        if (role == Role.USER) {
            return res.status(403).send({ 
                message: "No permission to access this resource" 
            });
        }

        next();
    } catch (error: any) {
        return abort(error.status, error.message);
    }
};

export default permission;