export class BandejaCliente {
    id_persona!: number;
    nombre_completo!: string;
    id_cliente?: number;
    id_cita?: number;
    id_especialidad?: number;
    horaDuracion?: number;
    minutosDuracion?: number;
    fechaInicio?: string;
    horaInicio?: string;
    id_consultorio?: number;
    id_frecuencia?: number;
    validoHasta?: string;
    nota?: string;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}