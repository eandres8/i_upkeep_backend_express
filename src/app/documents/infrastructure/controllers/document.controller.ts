import { Request, Response } from 'express';

import { DocumentRepository } from 'app/documents/application/repository/document.repository';

export class DocumentController {
    static async listDocuments(_req: Request, res: Response) {
        try {
            const data = await DocumentRepository.listDocuments();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async retrieveDocumentsByVehicleId(req: Request, res: Response) {
        try {
            const { vehicleId } = req.params;
            const data = await DocumentRepository.retrieveDocumentsByVehicleId(vehicleId);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async retrieveDocumentById(req: Request, res: Response) {
        try {
            const { documentId } = req.params;
            const data = await DocumentRepository.retrieveDocumentByID(documentId);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async createDocument(req: Request, res: Response) {
        const { body } = req;

        try {
            const newDocument = await DocumentRepository.createDocument(body);
            
            res.status(201).json(newDocument);

        } catch (error) {
            res.status(500).json({ error });
        }
    }
}
