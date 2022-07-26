import { DocumentInterface } from 'app/documents/domain/entities/document.interface';
import { Document } from 'app/documents/domain/models/document';
import { DocumentModel } from 'app/documents/application/models/document.model';

export class DocumentRepository {
    static async createDocument(body: DocumentInterface) {
        const document = new Document(body);

        // TODO: validate if a vehicleId exist

        const newDocumentModel = new DocumentModel(document.toJsonModel());

        const newDocument = await newDocumentModel.save();

        return newDocument.toJSON();
    }

    static async listDocuments(): Promise<DocumentInterface[]> {
        const data = await DocumentModel.find();

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