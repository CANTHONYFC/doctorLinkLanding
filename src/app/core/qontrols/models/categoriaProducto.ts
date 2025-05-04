export class CategoriaProducto {
    nombreCategoria: string="";
    tipoCategoria: number=0;
    id_uneg: number=0;
    id_categoriaProducto: number=0;
    fecha_registro: Date;
    user_register: string | null;
    fecha_modifica: Date | null;
    user_modifica: string | null;
    estado_reg: boolean;
    constructor(init?: Partial<CategoriaProducto>) {
        Object.assign(this, init);
    }
}
