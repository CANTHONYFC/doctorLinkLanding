export class Tratamientos
{    
    id: string;
    nombre: string;
    dosis: string;
    frecuencia: string;
    tiempoTratamiento: string;
    cantidad: number;
    observacion: string;


    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}