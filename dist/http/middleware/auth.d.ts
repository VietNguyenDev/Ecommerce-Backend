import { Request, Response, NextFunction } from "express";
import User from "../model/user.model";
interface AuthenticatedRequest extends Request {
    user?: User;
}
declare function auth(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
export { auth };
