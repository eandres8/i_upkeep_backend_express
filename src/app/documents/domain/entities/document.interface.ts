import { DateTime } from 'luxon';

import { DocumentState } from './document_state.enum';
import { DocumentsType } from './documents_type.enum';

export interface DocumentInterface {
    id: string;
    vehicleId: string;
    state: DocumentState;
    type: DocumentsType;
    category: string;
    description: string;
    startDate: DateTime;
    endDate: DateTime | null;
    createdAt: DateTime | null;
    updatedAt: DateTime | null;
}

export type DocumentModelInterface = Omit<DocumentInterface, 'id' | 'createdAt' | 'updatedAt'>;
