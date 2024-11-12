import { Request, Response } from 'express';
import ContactService from '../services/contact.service';
import { catchError } from '../utils/catchError';


export const createContact = async (req: Request, res: Response) => {
    const { name, company, profileImage, email, birthdate, phoneNumber, address } = req.body;
    try {
        const response = await ContactService.createContact({ name, company, profileImage, email, birthdate, phoneNumber, address });
        res.status(201).json({ status: true, data: response });

    } catch (err: any) {
        catchError(res, err.message);
    }
};


export const getContact = async (req: Request, res: Response) => {
    try {
        const contact = await ContactService.getContactById(req.params.id);

        res.json(contact);
    } catch (err: any) {
        if (err.message === 'Contact not found') {
            catchError(res, err.message, 404);
        } else {
            catchError(res, err.message);
        }
    }
};

export const updateContact = async (req: Request, res: Response) => {
    try {
        const contact = await ContactService.updateContact(req.params.id, req.body);

        res.json(contact);
    } catch (err: any) {
        if (err.message === 'Contact not found') {
            catchError(res, err.message, 404);
        } else {
            catchError(res, err.message);
        }
    }
};

export const deleteContact = async (req: Request, res: Response) => {
    try {
        const contact = await ContactService.deleteContact(req.params.id);
        res.json({ message: 'Contact deleted', contact });
    } catch (err: any) {
        if (err.message === 'Contact not found') {
            catchError(res, err.message, 404);
        } else {
            catchError(res, err.message);
        }
    }
};

export const searchContact = async (req: Request, res: Response) => {

    try {
        const { email, phoneNumber } = req.query;

        console.log(email, phoneNumber);
        const contact = await ContactService.searchContact(email as string, phoneNumber as string);
        res.json(contact);
    } catch (err: any) {
        if (err.message === 'Contact not found') {
            catchError(res, err.message, 404);
        } else {
            catchError(res, err.message);
        }
    }
};

export const getContactsByLocation = async (req: Request, res: Response) => {
    try {
        const { state, city } = req.query;
        const contacts = await ContactService.getContactsByLocation(state as string, city as string);
        res.json(contacts);
    } catch (err: any) {
        if (err.message === 'Contact not found') {
            catchError(res, err.message, 404);
        } else {
            catchError(res, err.message);
        }
    }
};