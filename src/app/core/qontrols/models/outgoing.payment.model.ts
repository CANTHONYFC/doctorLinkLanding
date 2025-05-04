import { Auditory } from "./auditory.model";

export class OutgoingPayment extends Auditory {
    id?: string;
    uniqueIdentifier?: string;
    company: string;
    bank: string;
    account: string;
    glAccount?: string;
    paymentType: string;
    date: string;
    posDate: string;
    amount: number;
    currency: string;
    comment: string;
    fundDTO: any;
    businessPartner?: string;
    businessName?: string;
    statusOperation?: string;
    type?: string;
}
