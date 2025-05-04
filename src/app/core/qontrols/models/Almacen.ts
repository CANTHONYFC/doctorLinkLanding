export class Almacen {
    id_almacen: number = 0;
    id_sucursal: number = 0;
    nombreAlmacen: string = '';
    descripcion: string = '';
    estado_reg: boolean = true;
    id_uneg: number = 0;

    constructor(init?: Partial<Almacen>) {
        Object.assign(this, init);
    }
}
