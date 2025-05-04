export class Servicios
{
    id: string;
    servicio?: string;
    duracion: string;
    precio?: string;
    capacidad?: string;
    categoria?: string;
    estadoReg: boolean;
    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

