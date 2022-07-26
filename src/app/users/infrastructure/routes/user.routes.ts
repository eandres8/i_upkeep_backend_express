import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { v1Path } from '../../../../core/utils/route_version';

export const userRouteList = Router();
export const USER_ROUTER = v1Path('/user');

export enum UserRoutes {
    GET_VEHICLES= '/',
    GET_VEHICLES_BY_USER_ID= '/:userId',
    CREATE_VEHICLE= '/',
}

userRouteList
    .get(UserRoutes.GET_VEHICLES, UserController.listUsers)
    .get(UserRoutes.GET_VEHICLES_BY_USER_ID, UserController.retrieveUserById)
    .post(UserRoutes.CREATE_VEHICLE, UserController.createUser);