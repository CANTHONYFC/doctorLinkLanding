export class Producto {
    correlativoProducto: string = "";
    nombre: string = "";
    id_tipo: number ;
    id_presentacion: number = 0;
    id_categoriaProducto: number = 0;
    unidadAlerta: number = 0;
    isCapacidadDosis: boolean = false;
    cantidadAplicaciones: number = 0;
    idAplicacion: number = 0;
    comentario: string = "";
    precioUnit: number = 0;
    fecha_vencimiento: Date | null = null;
    id_uneg: number = 0;
    stockMinimo: number = 0;
    id_producto: number = null;
    estado_reg: boolean = null;

    constructor(init?: Partial<Producto>) {
        Object.assign(this, init);
    }
}
