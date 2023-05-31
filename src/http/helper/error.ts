import { Request, Response, NextFunction } from "express";

class AppError extends Error {
    declare statusCode: number;
    declare name: string;

    constructor(message: string, statusCode: number) {
        super(message);
        Object.setPrototypeOf(this, AppError.prototype);
        Error.captureStackTrace(this, this.constructor);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

export const abort = (status: number, message: string): never => {
    throw new AppError(message, status);
}

export const handleError = (func: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
    async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await func(req, res, next);
        } catch (error: any) {
            if(!error.status) {
                error.status = 500;
            } 
            
            res.status(error.status).json({
                message: error.message //Something error
            });
        }
    }
}