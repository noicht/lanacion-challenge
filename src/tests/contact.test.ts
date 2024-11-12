import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../index';
import Contact from '../models/Contact.model';
import { DB_URI } from '../config/constants';


jest.setTimeout(30000);
beforeAll(async () => {
    await mongoose.connect(DB_URI);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Contact API', () => {
    let contactId: string;

    it('should create a new contact', async () => {
        const res = await request(app)
            .post('/contacts')
            .send({
                name: 'Martin',
                company: 'Compania random',
                profileImage: 'foto random',
                email: 'martin@google.com',
                birthdate: '1998-05-11',
                phoneNumber: {
                    work: '1234567890',
                    personal: '0987654321',
                },
                address: {
                    street: '123 calle falsa',
                    city: 'springfield',
                    state: 'IL',
                    zip: '12345',
                },
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.data).toHaveProperty('_id');
        contactId = res.body.data._id;
    });
    it('should retrieve the created contact', async () => {
        const res = await request(app).get(`/contacts/${contactId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id', contactId);
    });
    it('should update the contact', async () => {
        const res = await request(app)
            .put(`/contacts/${contactId}`)
            .send({ name: 'Martincho' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'Martincho');
    });

    it('should delete the contact', async () => {
        const res = await request(app).delete(`/contacts/${contactId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Contact deleted');
    });
});