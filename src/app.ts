import 'dotenv/config';
import express, { Router } from 'express';
import cors from 'cors';

import { MongoConnect } from './core/classes/mongo_connection';
import { ServerExpress } from './core/classes/server';
import { VEHICLE_ROUTER, vehicleRouteList } from './app/vehicles/infrastructure/routes/router';

const router = Router();

router.use(VEHICLE_ROUTER, vehicleRouteList);

const server = new ServerExpress.Builder()
    .setApp(
        express()
            .use(
                express.json(),
                cors(),
            )
    )
    .setPort(process.env.PORT as any)
    .setRoutes(router)
    .build();

export const db = new MongoConnect(process.env.MONGODB_CNN as any);

// TODO: set middlewares

db.connect();

server.listen();
