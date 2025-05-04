export class EspecialidadList{
    id_especialidad : number = 0;
    descripcion : string = '';
    fecha_registro : string = '';
    user_register : string = '';
    fecha_modifica : string = '';
    user_modifica : string = '';
    estado_reg : boolean;

    constructor(data:any={}){
        this.id_especialidad = data.id_usuario ? parseInt(data.id_usuario) : 0;
        this.descripcion = data.nombre ? data.nombre : '';
        this.fecha_registro = data.fecha_registro ? data.fecha_registro : '';
        this.user_register = data.user_register ? data.user_register : '';
        this.fecha_modifica = data.fecha_modifica ? data.fecha_modifica : '';
        this.user_modifica = data.user_modifica ? data.user_modifica : '';
        this.estado_reg = data.estado_reg ? data.estado_reg : '';

    }
} 