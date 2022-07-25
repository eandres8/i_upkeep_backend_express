import { VehicleInterface, VehicleModelInterface } from '../entities/vehicle.interface';
import { VehicleType } from '../entities/vehicle_type.enum';
import { MotorType } from '../entities/motor_type.enum';
import { VehicleState } from '../entities/vehicle_state.enum';

export class Vehicle {
    public readonly id: string;
    public readonly licensePlate: string;
    public readonly userId: string;
    public readonly brand: string;
    public readonly model: string;
    public readonly picture: string;
    public readonly vehicleType: VehicleType;
    public readonly motor: MotorType;
    public readonly mileage: number;
    public readonly year: number;
    public readonly cubicCentimeters: number;
    public readonly state: VehicleState;
    public readonly createdAt: Date | null;
    public readonly updatedAt: Date | null;

    constructor(vehicle: VehicleInterface) {
        this.id = vehicle.id;
        this.licensePlate = vehicle.licensePlate;
        this.userId = vehicle.userId;
        this.brand = vehicle.brand;
        this.model = vehicle.model;
        this.picture = vehicle.picture;
        this.vehicleType = vehicle.vehicleType;
        this.motor = vehicle.motor;
        this.mileage = vehicle.mileage;
        this.year = vehicle.year;
        this.cubicCentimeters = vehicle.cubicCentimeters;
        this.state = vehicle.state || VehicleState.ACTIVATE;
        this.createdAt = vehicle.createdAt;
        this.updatedAt = vehicle.updatedAt;
    }

    public copyWith(partial: Partial<VehicleInterface>): Vehicle {
        return new Vehicle({
            id: partial.id || '',
            licensePlate: partial.licensePlate || '',
            userId: partial.userId || '',
            brand: partial.brand || '',
            model: partial.model || '',
            picture: partial.picture || '',
            vehicleType: partial.vehicleType || VehicleType.MOTO,
            motor: partial.motor || MotorType.PETROL,
            mileage: partial.mileage || 0,
            year: partial.year || 1990,
            cubicCentimeters: partial.cubicCentimeters || 0,
            state: partial.state || VehicleState.ACTIVATE,
            createdAt: partial.createdAt || null,
            updatedAt: partial.updatedAt || null,
        });
    }

    public toJson(): VehicleInterface {
        return {
            id: this.id,
            licensePlate: this.licensePlate,
            userId: this.userId,
            brand: this.brand,
            model: this.model,
            picture: this.picture,
            vehicleType: this.vehicleType,
            motor: this.motor,
            mileage: this.mileage,
            year: this.year,
            cubicCentimeters: this.cubicCentimeters,
            state: this.state,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    public toJsonModel(): VehicleModelInterface {
        return {
            licensePlate: this.licensePlate,
            userId: this.userId,
            brand: this.brand,
            model: this.model,
            picture: this.picture,
            vehicleType: this.vehicleType,
            motor: this.motor,
            mileage: this.mileage,
            year: this.year,
            cubicCentimeters: this.cubicCentimeters,
            state: this.state,
        };
    }

    static pure(): Vehicle {
        return new Vehicle({
            id: '',
            licensePlate: '',
            userId: '',
            brand: '',
            model: '',
            picture: '',
            vehicleType: VehicleType.MOTO,
            motor: MotorType.PETROL,
            mileage: 0,
            year: 0,
            cubicCentimeters: 0,
            state: VehicleState.ACTIVATE,
            createdAt: null,
            updatedAt: null,
        });
    }
}
