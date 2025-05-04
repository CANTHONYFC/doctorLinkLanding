export class TipoIEPG{
    id_Parametros_Generales : number = 0;
    codigo: number = 0;
    category : string = '';
    descripcion : string = '';

    constructor(data:any={}){
        this.id_Parametros_Generales = data.id_Parametros_Generales ? parseInt(data.id_Parametros_Generales) : 0;
        this.codigo = data.codigo ? parseInt(data.codigo) : 0;
        this.category = data.category ? data.category : '';
        this.descripcion = data.descripcion ? data.descripcion : '';

    }
}