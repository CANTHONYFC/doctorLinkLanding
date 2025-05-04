import { getSelectedEmpresa } from "app/shared/util/utils/Storage";

export class Especialidad{
    id_especialidad : number = 0;
    descripcion : string = '';
    fecha_registro : string = '';
    user_register : string = '';
    fecha_modifica : string = '';
    user_modifica : string = '';
    estado_reg : boolean = false;
    idUneg: number = getSelectedEmpresa().idUneg;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    toJSON(){
        return {
            ...this,
            id_uneg: this.idUneg
        }
    }
}