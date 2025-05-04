import { EmpleadoDto } from "./EmpleadoDto";

export class EmpleadoAgenda{
    empleado: EmpleadoDto = new EmpleadoDto();
    citas: any[] = [];

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            if(data.empleado){
                this.empleado = new EmpleadoDto(data.empleado);
            }
        }
    }
}