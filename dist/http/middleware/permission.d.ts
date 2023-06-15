import { Request, Response, NextFunction } from "express";
declare const permission: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default permission;
