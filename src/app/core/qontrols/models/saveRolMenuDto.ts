import {Rol} from "./Rol.model";
import {Menu} from "@angular/cdk/menu";
import {MenuRolListDto} from "./MenuRolList.Dto";

export class SaveRolMenuDto extends Rol
{
     menus: MenuRolListDto[] = [];
    constructor(data?: Partial<SaveRolMenuDto>) {
        super(data); // Llamamos al constructor de Rol

        if (data) { 
            Object.assign(this, data);

            // Asegurar que `menus` sea un array de `MenuRolListDto`
            if (data.menus && Array.isArray(data.menus)) {
                this.menus = data.menus.map(menu => new MenuRolListDto(menu));
            }
        }
    }
}

