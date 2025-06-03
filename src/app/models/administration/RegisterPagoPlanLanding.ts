export class RegisterPagoPlanLanding {

    orderId: string;
    payerId: string;
    payerEmail: string;
    amount: string;
    correo: string;
    password: string;
    planId: number;

    constructor(data?: Partial<RegisterPagoPlanLanding>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
