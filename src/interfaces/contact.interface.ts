import { Document } from 'mongoose';

export interface IContact {
    name: string;
    company: string;
    profileImage: string;
    email: string;
    birthdate: Date;
    phoneNumber: {
        work: string;
        personal: string;
    };
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}

// export interface IContactCreate {
//     name: string;
//     company: string;
//     profileImage: string;
//     email: string;
//     birthdate: Date;
//     phoneNumber: {
//         work: string;
//         personal: string;
//     };
//     address: {
//         street: string;
//         city: string;
//         state: string;
//         zip: string;
//     };
// }



