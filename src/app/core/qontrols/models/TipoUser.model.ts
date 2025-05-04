export class TipoUser{
    id_usuario : number = 0;
    nombre : string = '';

    constructor(data:any={}){
        this.id_usuario = data.id_usuario ? parseInt(data.id_usuario) : 0;
        this.nombre = data.nombre ? data.nombre : '';
    }
} 