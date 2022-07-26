import { Router } from 'express';

import { DocumentController } from '../controllers/document.controller';
import { v1Path } from 'core/utils/route_version';

export const documentRouteList = Router();
export const DOCUMENTS_ROUTER = v1Path('/documents');

export enum DocumentRoutes {
    GET_DOCUMENTS= '/',
    GET_DOCUMENTS_BY_VEHICLE_ID= '/vehicle/:vehicleId',
    GET_DOCUMENT_BY_ID= '/:documentId',
    CREATE_DOCUMENT= '/',
}

documentRouteList
    .get(DocumentRoutes.GET_DOCUMENTS, DocumentController.listDocuments)
    .get(DocumentRoutes.GET_DOCUMENTS_BY_VEHICLE_ID, DocumentController.retrieveDocumentsByVehicleId)
    .get(DocumentRoutes.GET_DOCUMENT_BY_ID, DocumentController.retrieveDocumentById)
    .post(DocumentRoutes.CREATE_DOCUMENT, DocumentController.createDocument);