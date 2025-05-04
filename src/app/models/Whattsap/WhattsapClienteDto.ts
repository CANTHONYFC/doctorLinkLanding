import {WhattsapChat} from "./WhattsapChat";

export class WhattsapClienteDto {
    idWhattsapCliente: number = 0;
    idCliente: number = 0;
    idUneg: number = 0;
    countMessageNotView: number = 0;
    fechaUltimoMensaje: string | null = null;
    nombre: string = '';
    apellidoPaterno: string = '';
    apellidoMaterno: string = '';
    urlImage: string = '';
    lastBodyMessage: string | null = null;
    message: WhattsapChat = new WhattsapChat();

    constructor(data?: Partial<WhattsapClienteDto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
