export class PersonaDto {

    id_persona?: number;
    nombre: string = "";
    apellido_paterno: string = "";
    apellido_materno: string = "";
    tipoDocumento: number = null;
    dni: string = "";
    telefono_pais: string = "";
    telefono: string = "";
    falg_telefono: boolean = false;
    email: string = "";
    direccion: string = "";
    fecha_nacimiento: string = "";
    id_genero: number = null;
    id_fuente_capacitacion?: number;
    estado_reg?: boolean;
    id_uneg?: number;

    constructor(data?: Partial<PersonaDto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
