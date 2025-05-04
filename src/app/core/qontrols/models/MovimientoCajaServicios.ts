export class MovimientoCajaServicios {
    id_movimientoCajaServicios: number = 0;
    id_movimientoCaja: number = 0;
    cantidad: number = 0;
    precioUnitario: number = 0;
    descripcion: string = '';
    subTotal: number = 0;
    fecha_registro: Date | null = null;
    user_register: string | null = null;
    fecha_modifica: Date | null = null;
    user_modifica: string | null = null;
    flagNuevo: boolean = true;
    estado_reg: boolean = true;
    idProductoServicio: number = 0;
    idTipoPS: number = 0;
    constructor(init?: Partial<MovimientoCajaServicios>) {
        Object.assign(this, init);
    }
}


