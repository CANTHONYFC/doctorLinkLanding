export class UserDto {
    id: string = '';
    userName: string = '';
    normalizedUserName: string = '';
    email: string = '';
    normalizedEmail: string = ''; 
    emailConfirmed: boolean = false;
    phoneNumber: string = '';
    phoneNumberConfirmed: boolean = false;
    twoFactorEnabled: boolean = false;
    lockoutEnd: string = '';
    lockoutEnabled: boolean = false;
    accessFailedCount: number = 0;
    id_persona: number | null = null;
    estado_reg: boolean = false;
    nombre: string = '';
    apellido_paterno: string = '';
    apellido_materno: string = '';
    dni: string = '';
    telefono_pais: string = '';
    tipoDescripcion: string = '';
    telefono: string = '';
    falg_telefono: boolean = false; //flag
    direccion: string = '';
    fecha_nacimiento: string = '';
    id_genero: number | null = null;
    id_fuente_capacitacion: number | null = null;
    fecha_registro: string = '';
    user_register: string = '';
    fecha_modifica: string = '';
    user_modifica: string = '';
    passwordHash: string= null;
    tipo_usuario: number= null;

    constructor(data?: Partial<UserDto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
