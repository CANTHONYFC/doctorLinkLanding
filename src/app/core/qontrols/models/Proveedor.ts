import { getSelectedEmpresa } from "app/shared/util/utils/Storage";

export class Proveedor{
    id_proveedor: number = 0;
    nombres: string = '';
    telefono: string = '';
    email: string = '';
    cargo: string = '';
    comentario: string = '';
    id_empresaProveedor: number = 1;
    fecha_registro: string = '';
    user_register: number | null = null;
    fecha_modifica: number | null = null;
    user_modifica: number | null = null;
    estado_reg: boolean = true;
    id_uneg: number = getSelectedEmpresa().idUneg;

    //complementario
    country_code: string = '';

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