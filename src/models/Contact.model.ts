import mongoose, { Schema } from 'mongoose';
import { IContact } from '../interfaces/contact.interface';


const ContactSchema: Schema = new Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    profileImage: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    birthdate: { type: Date, required: true },
    phoneNumber: {
        work: { type: String, required: true },
        personal: { type: String, required: true },
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true },
    },
});

const Contact = mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;