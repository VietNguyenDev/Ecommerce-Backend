import jwt from 'jsonwebtoken';
export declare function generateToken(payload: any): Promise<string>;
export declare function verifyToken(token: string): Promise<string | false | jwt.JwtPayload>;
