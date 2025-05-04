export class PaginateOrdenCompraDetalle {
    id_ordenCompra: number;
    id_sucursal: number;
    fecha_emision: Date;
    observacion: string;
    estado: number;
    id_uneg: number;
    id_almacen: number;
    estado_reg: boolean;
    fecha_registro: Date;
    fecha_entrega: Date;
    fecha_pago: Date;
    estadoText: string;
    total: number;
    nombreProveedor: string;
    razonSocial: string;
    nombre: string;
    constructor(init?: Partial<PaginateOrdenCompraDetalle>) {
        Object.assign(this, init);
    }

}
