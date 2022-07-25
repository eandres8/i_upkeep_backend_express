import { Router } from 'express';

import { VehicleController } from '../controllers/vehicle.controller';
import { v1Path } from '../../../../core/utils/route_version';

export const vehicleRouteList = Router();
export const VEHICLE_ROUTER = v1Path('/vehicles');

export enum vehicleRoutes {
    GET_VEHICLES= '/',
    GET_VEHICLES_BY_USER_ID= '/user/:userId',
    CREATE_VEHICLE= '/',
}

vehicleRouteList
    .get(vehicleRoutes.GET_VEHICLES, VehicleController.listVehicles)
    .get(vehicleRoutes.GET_VEHICLES_BY_USER_ID, VehicleController.retrieveVehiclesByUserId)
    .post(vehicleRoutes.CREATE_VEHICLE, VehicleController.createVehicle);
