export class Persona {
    id_persona: number;
    nombre?: string='';
    apellido_paterno?: string;
    apellido_materno?: string;
    dni?: string;
    telefono_pais?: string;
    telefono?: string;
    falg_telefono?: boolean;
    email?: string;
    direccion?: string;
    fecha_nacimiento?: string; // o Date si lo necesitas como objeto
    id_genero?: number;
    id_fuente_capacitacion?: number;
    estado_reg?: boolean;
    fechaRegistro?: string; // o Date
    userRegister?: string;
    fechaModifica?: string; // o Date
    userModifica?: string;
    idUneg: number;
    tipoDocumento?: number;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
