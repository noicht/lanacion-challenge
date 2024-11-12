import { IContact } from '../interfaces/contact.interface';
import contactRepository from '../repositories/contact.repo';
import { sanitizeText } from '../utils/santizeText';
class ContactService {
    async createContact(contactData: IContact): Promise<IContact> {

        const { name, company, profileImage, email, birthdate, phoneNumber, address } = contactData;
        const newData = {
            name: sanitizeText(name),
            company: sanitizeText(company),
            profileImage,
            email,
            birthdate,
            phoneNumber,
            address: {
                street: sanitizeText(address.street),
                city: sanitizeText(address.city),
                state: sanitizeText(address.state),
                zip: sanitizeText(address.zip),
            },
        }

        const contact: IContact = await contactRepository.create(newData);
        return contact
    }

    async getContactById(id: string): Promise<IContact | null> {

        const contact = await contactRepository.findById(id);

        if (!contact) {
            throw new Error('Contact not found');
        }

        return contact;
    }

    async updateContact(id: string, contactData: Partial<IContact>): Promise<IContact | null> {
        const contact: IContact | null = await contactRepository.findById(id);

        if (!contact) {
            throw new Error('Contact not found');
        }


        const updatedContact = await contactRepository.update(id, contactData);

        if (!updatedContact) {
            throw new Error('Could not update contact');
        }
        return updatedContact
    }

    async deleteContact(id: string): Promise<{ id: string }> {
        const contact: IContact | null = await contactRepository.findById(id);

        if (!contact) {
            throw new Error('Contact not found');
        }

        const result = await contactRepository.delete(id);

        if (!result) {
            throw new Error('Could not delete contact');
        }

        return { id };
    }
    async searchContact(email?: string, phoneNumber?: string): Promise<IContact | null> {

        const contact = await contactRepository.findOne({ $or: [{ email }, { 'phoneNumber.work': phoneNumber }, { 'phoneNumber.personal': phoneNumber }] });

        //TODO tener en cuenta edge cases
        if (!contact) {
            throw new Error('Contact not found');
        }


        return contact;

    }

    async getContactsByLocation(state?: string, city?: string): Promise<IContact[]> {

        const sanitizedState = state ? sanitizeText(state) : undefined;
        const sanitizedCity = city ? sanitizeText(city) : undefined;

        const contact = await contactRepository.find({ $or: [{ 'address.state': sanitizedState }, { 'address.city': sanitizedCity }] });

        // TODO sanitizar los datos, utilizar mayusculas y quitar acentos

        if (!contact || contact.length === 0) {
            throw new Error('Contact not found');
        }


        return contact;
    }
}

export default new ContactService();