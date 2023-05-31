import { Request, Response, NextFunction } from "express";
export declare const abort: (status: number, message: string) => never;
export declare const handleError: (func: (req: Request, res: Response, next: NextFunction) => Promise<void>) => void;
