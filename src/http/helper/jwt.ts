import jwt from 'jsonwebtoken';

export async function generateToken(payload: any) {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
        algorithm: 'HS256',
        expiresIn: '1h'
    });
    return token;
};

export async function verifyToken(token: string) {
    try {
        const data = jwt.verify(token, process.env.JWT_KEY as string, {
            algorithms: ['HS256'],
        });

        return data;

    } catch (error: any) {
        return false;
    }
};