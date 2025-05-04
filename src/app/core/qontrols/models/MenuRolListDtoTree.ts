import {MenuRolListDto} from "./MenuRolList.Dto";

export class MenuRolListDtoTree extends MenuRolListDto{

    children: MenuRolListDtoTree[];
    constructor(data: MenuRolListDto) {
        super();
        this.id_menu = data.id_menu;
        this.nombre = data.nombre;
        this.enlace = data.enlace;
        this.id_rol = data.id_rol;
        this.order = data.order;
        this.icono = data.icono;
        this.code = data.code;
        this.statusMenu = data.statusMenu;
        this.statusRolMenu = data.statusRolMenu;
        this.parentMenu = data.parentMenu;
        this.id_rol_menu = data.id_rol_menu;
        this.flagNuevo = data.flagNuevo;
        this.children = [];
    }
}
