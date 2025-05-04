export class Consumos
{    
    id: string;
    fechaConsumo: string;
    producto: string;
    fuente: string;
    tipo: string;
    lote: string;
    cantidad: number;
    paciente: string;
    servicio: string;
    comentario: string;
    estado: string;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}