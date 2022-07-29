import { Request, Response } from 'express';

import { Vehicle } from '../../domain/models/vehicle';
import { VehicleRepositoty } from 'app/vehicles/application/repository/vehicle.repository';

export class VehicleController {
    static async listVehicles(req: Request, res: Response) {
        try {
            const { num = 10, page = 0 } = req.query;
            const vehicleList = await VehicleRepositoty.listVehicles({ limit: +num, skip: +page });
            res.json(vehicleList);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async retrieveVehiclesByUserId(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const vehicleList = await VehicleRepositoty.retrieveVehiclesByUserID( userId );
            res.json(vehicleList);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async createVehicle(req: Request, res: Response) {
        const { body } = req;

        try {
            const newVehicle = await VehicleRepositoty.createVehicle(body);
            
            res.status(201).json(newVehicle);

        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async retrieveByVehicleID(req: Request, res: Response) {
        const { vehicleId } = req.params;

        try {
            const vehicle = await VehicleRepositoty.retrieveByVehicleID(vehicleId);
            
            res.status(200).json(vehicle);

        } catch (error) {
            res.status(500).json({ error });
        }

    }
}

