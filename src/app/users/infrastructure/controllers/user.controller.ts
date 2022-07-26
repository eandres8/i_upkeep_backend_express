import { Request, Response } from 'express';

import { UserModel } from 'app/users/application/models/user.model';
import { UserRepository } from 'app/users/application/repository/user.repository';

export class UserController {
    static async listUsers(_req: Request, res: Response) {
        try {
            const data = await UserModel.find();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async retrieveUserById(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const data = await UserModel.findById(userId);
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
