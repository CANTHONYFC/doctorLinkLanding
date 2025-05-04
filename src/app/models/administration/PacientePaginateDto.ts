export class PacientePaginateDto{
id_persona?: number;
nombre?: string;
apellido_paterno?: string;
dni?: string;
telefono_pais?: string;
telefono?: string;
falg_telefono?: boolean;
email?: string;
direccion?: string;
fecha_nacimiento?: string; // Puede ser string o Date, dependiendo de cómo manejes fechas
id_genero?: number;
id_fuente_capacitacion?: number;
fecha_registro?: string;
user_register?: string;
fecha_modifica?: string;
user_modifica?: string;
nombreCompleto?: string;
estado_reg?: boolean;
apellido_materno?: string;
id_uneg?: number;
id_tipoDocumento?: number;
id_cliente?: number;
    constructor(init?: Partial<PacientePaginateDto>) {
        Object.assign(this, init);
    }
}
