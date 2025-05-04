import { getSelectedEmpresa, getSelectedSucursal } from "app/shared/util/utils/Storage";
import { ParametrosGenerales } from "./ParametrosGenerales";

export class ConfiguracionDia {
    id_sucursalDiasAtencion: number = 0;
    id_diaParametroGeneral!: number;
    id_sucursal: number = getSelectedSucursal().idSucursal;
    id_uneg: number = getSelectedEmpresa().idUneg;
    fecha_registro?: Date;
    user_register?: string;
    fecha_modifica?: Date;
    user_modifica?: string;
    estado_reg: boolean = false;

    dia: ParametrosGenerales | null = null;
    flagNuevo: boolean = true;
    //marcado: boolean = false;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    static fromParametro(p: ParametrosGenerales[],data):ConfiguracionDia{
        let c = new ConfiguracionDia(data);
        c.dia = p.find(e=> e.codigo == data.id_diaParametroGeneral);
        return c;
    }

    static fromData(p: ParametrosGenerales,data:any[]):ConfiguracionDia{
        let d = data.find(e=>e.id_diaParametroGeneral == p.codigo);
        let c = new ConfiguracionDia(d);
        //llenamos el id de dia
        c.id_diaParametroGeneral = p.codigo;
        c.dia = p;
        return c;
    }
}