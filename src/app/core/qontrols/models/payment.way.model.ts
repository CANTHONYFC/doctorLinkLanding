import { Auditory } from "./auditory.model";

export class PaymentWay extends Auditory {
    code: string;
    methods: any;
    paymentWay: string;
    banks?: any;
}
