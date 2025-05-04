export class AperturaCaja {
    id_aperturaCaja: number = 0;
    id_uneg: number = 0;
    id_sucursal: number = 0;
    fecha?: string;
    usuarioApertura?: string;
    fechaApertura?: string;
    montoInicial?: number;
    monto_cierre?: number;
    estado?: number;
    fechaCierre?: string;
    usuarioCierre?: string;

    constructor(data?: Partial<AperturaCaja>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
