import { Router } from 'express';

import { AuthController } from '../controllers/auth.controller';
import { v1Path } from '../../../../core/utils/route_version';

export const authRouteList = Router();
export const AUTH_ROUTER = v1Path('/auth');

export enum UserRoutes {
    LOGIN= '/login',
    REGISTER= '/register',
    FORGOT= '/forgot',
}

authRouteList
    .post(UserRoutes.LOGIN, AuthController.login)
    .post(UserRoutes.REGISTER, AuthController.register);