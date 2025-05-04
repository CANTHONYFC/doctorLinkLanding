import {Empresa} from "../qontrols/interface/Empresa";
import {Persona} from "../qontrols/models/Persona";
import {Empleado} from "../qontrols/models/Empleado.model";


export class User {
    id?: string;
    name?: string;
    surname?: string;
    email?: string;
    avatar?: string;
    status?: string;
    documentNumber?:number;
    empresas?: Empresa[];
    persona?:Persona;
    empleado?:Empleado;
    tipoUsuario?: number;
}
