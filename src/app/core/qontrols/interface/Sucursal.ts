import {Empresa} from "./Empresa";

export interface Sucursal {
    idSucursal?: number;
    nombre?: string;
    direccion?: string;
    idUneg?: number;
    estadoReg?: boolean;
    fechaRegistro?: Date;
    userRegister?: string;
    fechaModifica?: Date;
    userModifica?: string;
    empresa?: Empresa;
    userSucursal?: any;


}
