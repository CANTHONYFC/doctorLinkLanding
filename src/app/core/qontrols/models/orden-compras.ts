export class OrdenCompras
{
    id: string;
    nombreInterno: string;
    fechaCreacion: string;
    fechaEntrega: string;
    fechaPago: string;
    estado: string;
    monto: number; 
    proveedor: string;
    notaInterna: string;
    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
