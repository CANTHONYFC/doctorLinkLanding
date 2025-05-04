import { rolDto } from "./RolDto";
import {MenuRolListDtoTree} from "../../core/qontrols/models/MenuRolListDtoTree";
import {MenuRolListDto} from "../../core/qontrols/models/MenuRolList.Dto";

export class SucursalDto {
    idSucursal: number;
    idUneg: number;
    rol: rolDto;
    flagNuevo: boolean;

    constructor(data?: Partial<SucursalDto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
