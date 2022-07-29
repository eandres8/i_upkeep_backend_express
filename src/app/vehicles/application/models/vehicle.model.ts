
import { Schema, model } from 'mongoose';

import { VehicleState } from '../../domain/entities/vehicle_state.enum';
import { MotorType } from '../../domain/entities/motor_type.enum';
import { VehicleType } from '../../domain/entities/vehicle_type.enum';
import { DateTimeAdapter } from 'core/adapters/date_time.adapter';

const VehicleSchema = new Schema({
    licensePlate: {
        type: String,
        required: [true, 'The license plate is required'],
        unique: true
    },
    userId: {
        type: String,
        required: [true, 'The userId is required'],
    },
    brand: {
        type: String,
        required: [true, 'The brand is required'],
    },
    model: {
        type: String,
        required: [true, 'The model is required'],
    },
    picture: {
        type: String,
        // required: [true, 'The picture is required'],
    },
    vehicleType: {
        type: String,
        required: true,
        emun: [VehicleType.CAR, VehicleType.MOTO]
    },
    motor: {
        type: String,
        required: true,
        emun: [MotorType.PETROL, MotorType.GAS, MotorType.ELECTRIC]
    },
    state: {
        type: String,
        required: true,
        emun: [VehicleState.ACTIVATE, VehicleState.INACTIVATE]
    },
    mileage: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    cubicCentimeters: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: DateTimeAdapter.now(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: DateTimeAdapter.now(),
    },
});



VehicleSchema.methods.toJSON = function() {
    const { __v, _id: id, ...vehicle  } = this.toObject();
    return { ...vehicle, id };
}

export const VehicleModel = model( 'Vehicle', VehicleSchema );
