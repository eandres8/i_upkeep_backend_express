import { Schema, model } from 'mongoose';

import { DocumentState } from 'app/documents/domain/entities/document_state.enum';
import { DocumentsType } from 'app/documents/domain/entities/documents_type.enum';
import { DateTimeAdapter } from 'core/interfaces/date_time.adapter';

const DocumentSchema = new Schema({
    vehicleId: {
        type: String,
        required: [true, 'The vehicle ID is required'],
    },
    state: {
        type: String,
        enum: [DocumentState.ACTIVE, DocumentState.INACTIVE, DocumentState.NEXT_END, DocumentState.PENDING],
    },
    type: {
        type: String,
        enum: [DocumentsType.GAS_CHECK, DocumentsType.SECURE, DocumentsType.SOAT],
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
        required: [true, 'The start date is required'],
    },
    endDate: {
        type: Date,
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



DocumentSchema.methods.toJSON = function() {
    const { __v, _id: id, ...document  } = this.toObject();
    return { ...document, id };
}

export const DocumentModel = model( 'Document', DocumentSchema );
