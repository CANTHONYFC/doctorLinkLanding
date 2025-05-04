import { Persona } from "./Persona";

export class Cliente {
    id_cliente: number;
    id_persona: number;
    urlFoto?: string;
    fecha_registro?: string; // o Date
    user_register?: string;
    fecha_modifica?: string; // o Date
    user_modifica?: string;
    estado_reg: boolean;
    id_uneg?: number;
    nombreCompleto?: string;
    persona?: Persona= new Persona();
    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
