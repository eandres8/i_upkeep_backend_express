
import { Schema, model } from 'mongoose';

import { UserGender } from '../../domain/entities/user_gender.enum';
import { UserRole } from '../../domain/entities/user_role.enum';
import { UserState } from '../../domain/entities/user_state.enum';

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'The first name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'The last name is required'],
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The model is required'],
    },
    gender: {
        type: String,
        enum: [UserGender.MALE, UserGender.FAMALE],
    },
    role: {
        type: String,
        enum: [UserRole.USER, UserRole.SUPER_USER, UserRole.DEVELOPER],
    },
    birthdate: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        // required: [true, 'The picture is required'],
    },
    state: {
        type: String,
        required: true,
        emun: [UserState.ACTIVE, UserState.INACTIVE],
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});



UserSchema.methods.toJSON = function() {
    const { __v, password, _id: id, ...user  } = this.toObject();
    return { ...user, id };
}

export const UserModel = model( 'User', UserSchema );
