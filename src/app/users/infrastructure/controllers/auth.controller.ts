import { Request, Response } from 'express';

import { AuthRepository } from 'app/users/application/repository/auth.repository';

export class AuthController {
    static async login(req: Request, res: Response) {
        try {
            const { username = '', password = '' } = req.body;
            const token = await AuthRepository.doLogin(username, password);

            res.status(200).json({ token });
        } catch (error: any) {
            res.status(400).json(error.toString());
        }
    }
}
