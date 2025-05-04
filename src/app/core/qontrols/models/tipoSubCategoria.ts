export class tipoSubCategoria{
    id_subCategoria : number = 0;
    nombre : string = '';
    estado_reg : boolean;
    id_uneg: boolean;

    constructor(data:any={}){
        this.id_subCategoria = data.id_subCategoria ? parseInt(data.id_subCategoria) : 0;
        this.nombre = data.nombre ? data.nombre : '';
        this.estado_reg = data.estado_reg ? data.estado_reg : '';
        this.id_uneg = data.id_uneg ? data.id_uneg : '';

    }
} 