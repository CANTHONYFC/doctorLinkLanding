import { getSelectedEmpresa } from "app/shared/util/utils/Storage";
import { EtiquetaDto } from "./EtiquetaDto";

export class PersonaPC {
    nombre: string = '';
    apellido_paterno: string = '';
    apellido_materno: string = '';
    fecha_nacimiento: string = '';
    tipoDocumento: number = 1;
    dni: string = '';
    email: string = '';
    falg_telefono: boolean = true;
    telefono: string = '';

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
  
export class ClientePC {
    urlFoto: string = '';

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
  
export class EtiquetaClientePC {
    id_etiqueta: number | null = null;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
  
export class ParentescoPersonaPC {
    nombre: string = '';
    apellido_paterno: string = '';
    apellido_materno: string = '';
    fecha_nacimiento: string = '';
    tipoDocumento: number = 1;
    dni: string = '';
    email: string = '';

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
  
export class ParentescoDataPC {
    telefono: string = '';
    falg_apoderado: boolean = false;
    tipo_parentesco: number = 1;

    country_code: string = '+51';

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            if (data.telefono) {
                const telefonoMatch = data.telefono.match(/^(\+\d+)\s(.+)$/);
                if (telefonoMatch) {
                    this.country_code = telefonoMatch[1];
                    this.telefono = telefonoMatch[2];
                } else {
                    this.telefono = data.telefono;
                }
            }
        }
    }

    toJSON() {
        return {
            ...this,
            telefono: `${this.country_code || ''} ${this.telefono || ''}`.trim()
        };
    }
}
  
export class ParentescoPC {
    parentesco: ParentescoDataPC = new ParentescoDataPC();
    persona: ParentescoPersonaPC = new ParentescoPersonaPC();

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
  
export class PacienteCreate {
    persona: PersonaPC = new PersonaPC();
    cliente: ClientePC = new ClientePC();
    etiquetasCliente: EtiquetaDto[] = [];
    id_uneg: number = getSelectedEmpresa().idUneg;
    parentesco: ParentescoPC | null = new ParentescoPC();

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}