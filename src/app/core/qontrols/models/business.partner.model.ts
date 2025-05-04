import { Auditory } from "./auditory.model";

export class BusinessPartner extends Auditory {
    paymentCondition: number;
    partnerType: string;
    currency: string;
    creditBalance: number;
    creditLine: number;
    agRet: string;
    approved: string;
    additionalData: {
        store: string;
    };
    priceList: string;
    personType: string;
    typeDocument: string;
    customerType: string;
    names: string;
    lastNameF: string;
    lastNameM: string;
    businessName: string;
    commercialName: string;
    email: string;
    code?: string;
    nif: string;
    phoneNumber: string;
    migration: string;
    addresses: Addresses[];
    birthDate: string;
    createUser: string;
    createUserName: string;
    createUserMail: string;
    businessPartnerCode: string;
    level?: number;
}

export class Addresses extends Auditory {
    department: string;
    province: string;
    district: string;
    id: string;
    addressName: string;
    address: string;
    type: string;
    code: string;
    migrationStatus: number;
    migration: string;
    country: string;
    ubiquitous: number;
}
