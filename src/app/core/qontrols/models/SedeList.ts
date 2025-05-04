export class SedeList{
    id_user_sucursal : number = 0;
    id_sucursal: number = 0;
    nombre : string = '';
    direccion : string = '';


    constructor(data:any={}){
        this.id_user_sucursal = data.id_user_sucursal ? parseInt(data.id_user_sucursal) : 0;
        this.id_sucursal = data.id_sucursal ? parseInt(data.id_sucursal) : 0;
        this.nombre = data.nombre ? data.nombre : '';
        this.direccion = data.direccion ? data.direccion : '';

    }
}