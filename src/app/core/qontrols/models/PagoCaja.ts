export class PagoCaja {
    id_pagoCaja: number = 0;
    id_movimientoCaja: number = 0;
    monto: number = 0;
    id_medioPago: number = null;
    referenciaPago: string | null = null;
    observaciones: string | null = null;
    fechaPago: Date | null = null;
    flagNuevo: boolean = true;
    estado_reg: boolean = true;

    constructor(init?: Partial<PagoCaja>) {
        Object.assign(this, init);
    }
}
