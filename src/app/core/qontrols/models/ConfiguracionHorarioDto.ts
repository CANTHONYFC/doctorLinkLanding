import { getSelectedEmpresa, getSelectedSucursal } from "app/shared/util/utils/Storage";
import { ConfiguracionDia } from "./ConfiguracionDia";
import { ConfiguracionSucursalHorario } from "./ConfiguracionSucursalHorario";

export class ConfiguracionHorarioDto{
    sucursalHorarioDto?: ConfiguracionSucursalHorario;
    diasDto: ConfiguracionDia[] = [];
    id_uneg: number = getSelectedEmpresa().idUneg;
    id_sucursal: number = getSelectedSucursal().idSucursal;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}