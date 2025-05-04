export class MenuRolListDto {
id_rol_menu: number;
id_menu: number;
nombre?: string;
enlace?: string;
icono?: string;
parentMenu?: number;
id_rol?: string;
order?: number; // Si causa conflicto con palabras reservadas, considera renombrarlo
statusMenu?: boolean;
code?: string;
statusRolMenu?: boolean;
flagNuevo?: boolean;
children?: any;
constructor(data?: any) {
    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }
}
}
