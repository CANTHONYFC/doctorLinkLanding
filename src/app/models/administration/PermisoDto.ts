export class PermisoDto {
    id_rol_menu?: number | null;
    id_menu?: number;
    nombre?: string;
    enlace?: string;
    icono?: string;
    parentMenu?: number | null;
    id_rol?: string;
    order?: number;
    statusMenu?: boolean;
    code?: string;
    statusRolMenu?: boolean;
    flagNuevo?: boolean;



    constructor(data?: Partial<PermisoDto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
