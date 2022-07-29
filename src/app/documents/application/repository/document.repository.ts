import { DocumentInterface } from 'app/documents/domain/entities/document.interface';
import { Document } from 'app/documents/domain/models/document';
import { DocumentModel } from 'app/documents/application/models/document.model';
import { VehicleModel } from 'app/vehicles/application/models/vehicle.model';
import { Pagination } from 'core/interfaces/pagination.interface';

export class DocumentRepository {
    static async createDocument(body: DocumentInterface) {
        const document = new Document(body);
        
        const vehicle = await VehicleModel.findOne({ vehicleId: document.vehicleId });

        if (!vehicle?._id) {
            throw new Error('The vehicle doesn`t exist');
        }

        const newDocumentModel = new DocumentModel(document.toJsonModel());

        const newDocument = await newDocumentModel.save();

        return newDocument.toJSON();
    }

    static async listDocuments({ limit, skip }: Pagination): Promise<DocumentInterface[]> {
        const data = await DocumentModel.find().skip(skip).limit(limit);

        return data.map<DocumentInterface>(document => new Document(document.toJSON() as any));
    }

    static async retrieveDocumentsByVehicleId(vehicleId: string): Promise<DocumentInterface[]> {
        const data = await DocumentModel.find({ vehicleId });

        return data.map<DocumentInterface>(document => new Document(document.toJSON() as any));
    }

    static async retrieveDocumentByID(documentId: string) {
        const data = await DocumentModel.findById( documentId );

        return data?.toJSON();
    }
}