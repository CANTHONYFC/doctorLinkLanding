import { getSelectedEmpresa, getSelectedSucursal } from "app/shared/util/utils/Storage";

export class HCProcedimiento{
    id_hc_procedimiento : number = 0;
    id_historial_clinico : number = 0;
    id_uneg : number = getSelectedEmpresa().idUneg;
    id_sucursal : number = getSelectedSucursal().idSucursal;
    descripcion : string = '';
    id_plantilla : number = 0;
    url_trazos : string = '';
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