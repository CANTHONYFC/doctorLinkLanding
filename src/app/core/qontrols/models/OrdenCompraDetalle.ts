import {Producto} from "./Producto ";

export class OrdenCompraDetalles {
    id_producto: number = 0;
    cantidad: number = 0;
    id_almacen: number = 0;
    precioCompraUnitario: number = 0;
    total: number = 0;
    fecha_vencimiento: Date = new Date();
    nroLote: String
    estado_reg: Boolean
    flagNuevo: Boolean
    producto: Producto=new Producto();

    constructor(init?: Partial<OrdenCompraDetalles>) {
        Object.assign(this, init);
    }
}
