import { Request, Response } from 'express';

import { UserRepository } from 'app/users/application/repository/user.repository';

export class UserController {
    static async listUsers(_req: Request, res: Response) {
        try {
            const data = await UserRepository.listUsers();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async retrieveUserById(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const data = await UserRepository.retrieveUserById(userId);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async createUser(req: Request, res: Response) {
        const { body } = req;

        try {
            const newUser = await UserRepository.createUser(body);
            
            res.status(201).json(newUser);

        } catch (error) {
            res.status(500).json({ error });
        }
    }
}
