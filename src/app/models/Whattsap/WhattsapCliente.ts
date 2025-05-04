import {WhattsapChat} from "./WhattsapChat";
import {Cliente} from "../../core/qontrols/models/Cliente.model";


export class PagedResult<T> {
    page: number;
    pageSize: number;
    totalCount: number;
    list: T[];

    constructor(init?: Partial<PagedResult<T>>) {
        Object.assign(this, init);
    }
}

export class WhattsapCliente {
    idWhattsapCliente: number;
    idCliente: number;
    idUneg: number;
    countMessageNotView?: number;
    fechaRegistro?: string;
    userRegister?: string;
    lastBodyMessage?: string;
    fechaModifica?: string;
    userModifica?: string;
    phoneNumber?: string;
    estadoReg?: boolean;
    cliente?:Cliente;
    mensajesPaginados?: PagedResult<WhattsapChat>;
    message?: WhattsapChat=new WhattsapChat();
    constructor(init?: Partial<WhattsapCliente>) {
        Object.assign(this, init);
    }
}
