export class ComprasItems
{    
    id: string;
    ordenCompra: string;
    stockActual: number;
    fechaCreacion: string;
    producto: string;
    lote: string;
    cantidad: number;
    precioCompraUnit: number;
    fechaVencimiento: string;
    marca: string;
    presentacion: string;
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