import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { v1Path } from '../../../../core/utils/route_version';

export const userRouteList = Router();
export const USER_ROUTER = v1Path('/user');

export enum UserRoutes {
    GET_USERS= '/',
    GET_BY_USER_ID= '/:userId',
    UPDATE_USER= '/:userId',
    CREATE_USER= '/',
}

userRouteList
    .get(UserRoutes.GET_USERS, UserController.listUsers)
    .get(UserRoutes.GET_BY_USER_ID, UserController.retrieveUserById)
    .put(UserRoutes.UPDATE_USER, UserController.updateUser)
    .post(UserRoutes.CREATE_USER, UserController.createUser);