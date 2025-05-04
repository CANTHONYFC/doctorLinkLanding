import {EmpleadoDto} from "./EmpleadoDto";
import {PersonaDto} from "./PersonaDto";
import {SucursalDto} from "./SucursalDto";
import {UserDto} from "./UserDto";

export class PersonUserDto {

    idUneg: number = 0;
    persona: PersonaDto = new PersonaDto();
    usuario: UserDto = new UserDto();
    empleado: EmpleadoDto = new EmpleadoDto();
    sucursal: SucursalDto[] = [];

    constructor(data?: Partial<PersonUserDto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
