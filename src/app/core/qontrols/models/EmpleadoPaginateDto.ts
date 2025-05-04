export class EmpleadoPaginateDto {
    id_persona?: number;
    nombre: string = '';
    apellido_paterno: string = '';
    dni: string = '';
    telefono_pais?: string = '';
    telefono?: string = '';
    falg_telefono?: boolean = false;
    email: string = '';
    direccion?: string = '';
    fecha_nacimiento?: Date | string;
    id_genero?: number;
    id_fuente_capacitacion?: number;
    fecha_registro?: Date | string;
    user_register: string = '';
    fecha_modifica?: Date | string;
    user_modifica?: string = '';
    nombreCompleto?: string = '';
    estado_reg?: boolean = true;
    apellido_materno: string = '';
    id_uneg?: number;
    id_tipoDocumento?: number;
    id_empleado?: number;

    constructor(init?: Partial<EmpleadoPaginateDto>) {
        Object.assign(this, init);
    }
}
