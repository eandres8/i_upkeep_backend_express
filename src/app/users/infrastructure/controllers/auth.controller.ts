import { Request, Response } from 'express';

import { AuthRepository } from 'app/users/application/repository/auth.repository';
import { User } from 'app/users/domain/models/user';

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

    static async register(req: Request, res: Response) {
        try {
            const user = User.pure().copyWith(req.body);
            const newUser = await AuthRepository.doRegister(user);

            res.status(201).json(newUser);
        } catch (error: any) {
            res.status(400).json(error.message);
        }
    }
}
