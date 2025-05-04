import {OrdenCompraDetalles} from "./OrdenCompraDetalle";
import {Proveedor} from "./Proveedor";
import {Producto} from "./Producto ";

export class OrdenCompra {
    id_sucursal: number = 0;
    fecha_emision: Date = new Date();
    fecha_registro: Date = new Date();
    fecha_pago: Date = new Date();
    fecha_entrega: Date = new Date();
    observacion: string = "";
    nombre: string = "";
    nroFactura: string = "";
    id_proveedor: number ;
    estado: number ;
    total: number = 0;
    flagPagado: boolean = false;
    id_uneg: number = 0;
    proveedor: Proveedor=new Proveedor();
    detalle: OrdenCompraDetalles[] = [];
    constructor(init?: Partial<OrdenCompra>) {
        Object.assign(this, init);
    }
}
