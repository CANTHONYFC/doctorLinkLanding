export class PaginateOrdenCompra {
    total?: number;
    razonSocial?: string;
    observacion?: string;
    nombreProveedor?: string;
    nombre?: string;
    id_uneg?: number;
    id_sucursal?: number;
    id_ordenCompra?: number;
    id_almacen?: number;
    fecha_registro?: Date;
    fecha_pago?: Date;
    fecha_entrega?: Date;
    fecha_emision?: Date;
    estadoText?: string;
    estado_reg?: boolean;
    estado?: number;
    constructor(init?: Partial<PaginateOrdenCompra>) {
        Object.assign(this, init);
    }
}
