import { getSelectedEmpresa } from "app/shared/util/utils/Storage";

export class ProcedimientoPlantilla{

    id_plantilla : number = 0;
    id_uneg : number = getSelectedEmpresa().idUneg;
    descripcion : string = '';
    url : string = '';
    id_especialidad : number = 0;
    id_tipo_procedimiento : number = 0;
    fecha_registro : string = '';
    user_register : string = '';
    fecha_modifica : string = '';
    user_modifica : string = '';
    estado_reg : boolean = true;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
