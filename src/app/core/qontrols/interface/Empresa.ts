import {Sucursal} from "./Sucursal";

export interface Empresa {
    idUneg?: number;
    ruc?: string;
    razonSocial?: string;
    direccion?: string;
    image?: string;
    color?: string;
    video?: string;
    estadoReg?: boolean;
    fechaRegistro?: Date;
    userRegister?: string;
    fechaModifica?: Date;
    userModifica?: string;
    sucursales?: Sucursal[];
    userEmpresas?: any[];

}
