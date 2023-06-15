import { Request, Response, NextFunction } from "express";
import {verifyToken} from "../helper/jwt";
import User from "../model/user.model";
import { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    user?: User;
}

interface Payload extends JwtPayload {
    id: number;
}

async function getUser(req: Request) {
    const authorization: string = req.headers.authorization || '';
    if (authorization === '') return false;
    //kiểm tra kiểu authorization
    if (!authorization.startsWith('Bearer ')) return false;
    //lấy token
    const token: string = authorization.slice(7, authorization.length);

    //revert token to user
    const payload = await verifyToken(token) as Payload | false;
    if (payload === false) return false;

    //tìm user theo id
    const user = await User.findOne({where: { id: payload.id }});
    if (!user) return false;
    return user;
}

async function auth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const user = await getUser(req);
  //Check if user is logged in
  if (!user) {
    return res.status(401).send({
      message: 'You must be logged in',
    });
  }

  req.body.user = user;
  return next();
}

export { auth };

