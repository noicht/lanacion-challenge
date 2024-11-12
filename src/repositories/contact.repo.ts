import Contact from '../models/Contact.model';
import { IContact } from '../interfaces/contact.interface';

class ContactRepository {
    async create(contact: IContact): Promise<IContact> {
        return new Contact(contact).save();
    }

    async findById(id: string): Promise<IContact | null> {
        return await Contact.findById(id);
    }

    async update(id: string, contact: Partial<IContact>): Promise<IContact | null> {
        return await Contact.findByIdAndUpdate(id, contact, { new: true });
    }

    async delete(id: string): Promise<IContact | null> {
        return await Contact.findByIdAndDelete(id);
    }

    async findOne(query: object): Promise<IContact | null> {
        return await Contact.findOne(query);
    }

    async find(query: object): Promise<IContact[]> {
        return await Contact.find(query);
    }
}

export default new ContactRepository();