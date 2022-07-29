import mongoose from 'mongoose';

import { DBConnectionAdapter } from '../adapters/db_connection.adapter';

export class MongoConnect implements DBConnectionAdapter {
    constructor(
        public readonly path: string,
    ) {}

    public async connect() {
        try {
            await mongoose.connect( this.path );
            console.log('DataBase connected');
        } catch (error) {
            console.error(error);
            throw new Error('Error a la hora de iniciar la base de datos');
        }
    }
}