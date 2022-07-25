import { Request, Response } from 'express';

import { Vehicle } from '../../domain/models/vehicle';
import { VehicleModel } from '../../application/models/vehicle.model';

export class VehicleController {
    static async listVehicles(_req: Request, res: Response) {
        try {
            const vehicleList = await VehicleModel.find();
            res.json(vehicleList);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async retrieveVehiclesByUserId(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const vehicleList = await VehicleModel.find({ userId });
            res.json(vehicleList);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async createVehicle(req: Request, res: Response) {
        const { body } = req;

        try {
            const vehicle = new Vehicle(body);

            const newVehicleModel = new VehicleModel(vehicle.toJsonModel());

            const newVehicle = await newVehicleModel.save();
            
            res.status(201).json(newVehicle);

        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

