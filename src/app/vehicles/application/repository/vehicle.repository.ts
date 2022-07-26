import { VehicleInterface } from 'app/vehicles/domain/entities/vehicle.interface';
import { Vehicle } from 'app/vehicles/domain/models/vehicle';
import { VehicleModel } from '../models/vehicle.model';

export class VehicleRepositoty {

    static async createVehicle(body: VehicleInterface) {

        const vehicle = new Vehicle(body);

        // TODO: validate if userID exist

        const newVehicleModel = new VehicleModel(vehicle.toJsonModel());

        const newVehicle = await newVehicleModel.save();

        return newVehicle.toJSON();
    }

    static async listVehicles(): Promise<VehicleInterface[]> {
        const data = await VehicleModel.find();

        return data.map<VehicleInterface>(vehicle => new Vehicle(vehicle.toJSON() as any));
    }

    static async retrieveVehiclesByUserID(userId: string): Promise<VehicleInterface[]> {
        const data = await VehicleModel.find({ userId });

        return data.map<VehicleInterface>(vehicle => new Vehicle(vehicle.toJSON() as any));
    }

    static async retrieveByVehicleID(vehicleId: string) {
        const data = await VehicleModel.findById( vehicleId );
        
        return data?.toJSON();
    }
}