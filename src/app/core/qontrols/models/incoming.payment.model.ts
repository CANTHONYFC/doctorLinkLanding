import { Auditory } from "./auditory.model";

export class IncomingPayment extends Auditory {
    id?: string;
    uniqueIdentifier?: string;
    company: string;
    bank: string;
    account: string;
    glAccount?: string;
    statusOperation?: string;
    paymentType: string;
    date: string;
    posDate: string;
    amount: number;
    currency: string;
    comment: string;
    fundDTO: any;
    businessPartner?: string;
    businessName?: string;
}
