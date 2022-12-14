import { Request, Response } from 'express';

import { UserRepository } from 'app/users/application/repository/user.repository';

export class UserController {
    static async listUsers(req: Request, res: Response) {
        try {
            const { num = 10, page = 0 } = req.query;
            const data = await UserRepository.listUsers({ limit: +num, skip: +page });
            res.json(data);
        } catch (error: any) {
            res.status(400).json(error.message);
        }
    }

    static async retrieveUserById(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const data = await UserRepository.retrieveUserById(userId);
            res.json(data);
        } catch (error: any) {
            res.status(400).json(error.message);
        }
    }

    static async createUser(req: Request, res: Response) {
        const { body } = req;

        try {
            const newUser = await UserRepository.createUser(body);
            
            res.status(201).json(newUser);

        } catch (error: any) {
            res.status(400).json(error.message);
        }
    }

    static async updateUser(req: Request, res: Response) {
        const { body } = req;
        const { userId } = req.params;

        try {
            const newDataUser = await UserRepository.updateUser(userId, body);
            
            res.status(200).json(newDataUser);

        } catch (error: any) {
            res.status(400).json(error.message);
        }
    }
}
