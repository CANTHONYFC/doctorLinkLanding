export class WhattsapChat {
    idChat: number=0;
    smsMessageSid: string='';
    numMedia: number=0;
    idwhattsapCliente: number=0;
    profileName: string='';
    messageType: string='';
    smsSid: string='';
    waId: string='';
    smsStatus: string='';
    bodyMessage: string='';
    toPhoneNumber: string='';
    numSegments: number=0;
    referralNumMedia: number=0;
    accountSid: string='';
    fromPhoneNumber: string='';
    createdAt: Date=new Date();
    isMine: boolean=false;
    constructor(init?: Partial<WhattsapChat>) {
        Object.assign(this, init);
    }
}
