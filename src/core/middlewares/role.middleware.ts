import { Request, Response } from 'express';

import { UserRole } from 'app/users/domain/entities/user_role.enum';

export const roleMiddleware = (roles: UserRole[]) => {
    return (req: Request, res: Response, next: any) => {
        const role = req.header('role') || '';

        if (!roles.includes(role as UserRole)) {
            return res.status(403).json("Unauthorized source");
        }

        next();
    };
};
