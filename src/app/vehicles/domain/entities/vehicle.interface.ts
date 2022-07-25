import { MotorType } from './motor_type.enum';
import { VehicleType } from './vehicle_type.enum';
import { VehicleState } from './vehicle_state.enum';

export interface VehicleInterface {
    id: string;
    licensePlate: string; 
    userId: string; 
    brand: string; 
    model: string; 
    picture: string; 
    vehicleType: VehicleType; 
    motor: MotorType; 
    mileage: number; 
    year: number; 
    cubicCentimeters: number; 
    state: VehicleState; 
    createdAt: Date | null; 
    updatedAt: Date | null; 
}

export type VehicleModelInterface = Omit<VehicleInterface, 'id' | 'createdAt' | 'updatedAt'>;
