import { env } from 'process';
import jwt from 'jsonwebtoken';

export class JWTAdapter {
    static generateJWT(payload: Object) {
        return jwt.sign(payload, env.SECRET_KEY!);
    }

    static validateJWT(token: string) {
        return jwt.verify(token, env.SECRET_KEY!);
    }
}
