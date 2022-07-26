import { DateTime } from 'luxon';

import { DocumentInterface, DocumentModelInterface } from 'app/documents/domain/entities/document.interface';
import { DocumentState } from 'app/documents/domain/entities/document_state.enum';
import { DocumentsType } from 'app/documents/domain/entities/documents_type.enum';
import { DateTimeAdapter } from 'core/interfaces/date_time.adapter';

export class Document {
    public readonly id: string;
    public readonly vehicleId: string;
    public readonly state: DocumentState;
    public readonly type: DocumentsType;
    public readonly category: string;
    public readonly description: string;
    public readonly startDate: DateTime;
    public readonly endDate: DateTime | null;
    public readonly createdAt: DateTime | null;
    public readonly updatedAt: DateTime | null;

    constructor(document: DocumentInterface) {
        this.id = document.id;
        this.vehicleId = document.vehicleId;
        this.state = document.state;
        this.type = document.type;
        this.category = document.category;
        this.description = document.description;
        this.startDate = document.startDate;
        this.endDate = document.endDate;
        this.createdAt = document.createdAt;
        this.updatedAt = document.updatedAt;
    }

    public copyWith(partial: Partial<DocumentInterface>) {
        return new Document({
            id: partial.id || this.id,
            vehicleId: partial.vehicleId || this.vehicleId,
            state: partial.state || this.state,
            type: partial.type || this.type,
            category: partial.category || this.category,
            description: partial.description || this.description,
            startDate: partial.startDate || this.startDate,
            endDate: partial.endDate || this.endDate,
            createdAt: partial.createdAt || this.createdAt,
            updatedAt: partial.updatedAt || this.updatedAt,
        });
    }

    public toJson(): DocumentInterface {
        return {
            id: this.id,
            vehicleId: this.vehicleId,
            state: this.state,
            type: this.type,
            category: this.category,
            description: this.description,
            startDate: this.startDate,
            endDate: this.endDate,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    public toJsonModel(): DocumentModelInterface {
        return {
            vehicleId: this.vehicleId,
            state: this.state,
            type: this.type,
            category: this.category,
            description: this.description,
            startDate: this.startDate,
            endDate: this.endDate,
        };
    }

    static pure(): Document {
        return new Document({
            id: '',
            vehicleId: '',
            state: DocumentState.ACTIVE,
            type: DocumentsType.SECURE,
            category: '',
            description: '',
            startDate: DateTimeAdapter.now(),
            endDate: null,
            createdAt: DateTimeAdapter.now(),
            updatedAt: DateTimeAdapter.now(),
        });
    }
}