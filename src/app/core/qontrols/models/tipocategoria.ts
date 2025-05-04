export class TipoCategoria{
    id_categoria : number = 0;
    nombre : string = '';
    estado_reg : boolean;
    id_uneg: boolean;

    constructor(data:any={}){
        this.id_categoria = data.id_categoria ? parseInt(data.id_categoria) : 0;
        this.nombre = data.nombre ? data.nombre : '';
        this.estado_reg = data.estado_reg ? data.estado_reg : '';
        this.id_uneg = data.id_uneg ? data.id_uneg : '';

    }
} 