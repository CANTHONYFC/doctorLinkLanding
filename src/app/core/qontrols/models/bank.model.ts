import { Auditory } from "./auditory.model";

export class Bank extends Auditory {
    id?: string;
    company?: string;
    bankCode: string;
    accNo: string;
    currency: string;
    glAccount: string;
    absoluteEntry?: string;
    accountName: string;
}