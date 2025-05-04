import { PersonaDto } from "app/models/administration/PersonaDto";


export class EmpleadoDto{
    id_empleado: number;
    id_persona: number;
    id_especialidad: number;
    titulo: string;
    flagNotificacion: boolean;
    nroColegiatura: string;
    codigoRne: string;
    institucionTitulacion: string;
    urlFirma: string;
    comision: number;
    descuento: number;
    fecha_registro: string;
    user_register: string;
    fecha_modifica?: string | null;
    user_modifica?: string | null;
    estado_reg: boolean;
    urlFoto?: string | null;
    id_uneg?: number | null;
    id_colegiatura?: number | null;

    persona: PersonaDto = new PersonaDto();

    color: string | null = "#26A151";

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}