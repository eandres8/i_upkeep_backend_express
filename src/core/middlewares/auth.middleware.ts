import { Request, Response } from 'express';

import { JWTAdapter } from 'core/interfaces/jwt.adapter';

export const validateAuthToken = (req: Request, res: Response, next: any ) => {
    const token = req.header('Authorization');
    
    if (!token) {
        return res.send(401).json("You must be authenticated");
    }

    try {
        const payload: any = JWTAdapter.validateJWT(token);
        req.headers.uid = payload.uid;
        req.headers.role = payload.role;

        next();
    } catch (error) {
        return res.send(401).json("Token no valid");
    }
};
