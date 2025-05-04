export class Presupuestos
{    
    id: string;
    item: string;
    cantidad: number;
    precioUnitario: number;
    descuento: number;
    subTotal: number;
    comentario: string;


    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}