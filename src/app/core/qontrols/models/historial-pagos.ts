export class Pagos
{    
    id: string;
    fecha: string;
    doctor: string;
    motivo: string;
    comentario: string;
    precio: number;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}