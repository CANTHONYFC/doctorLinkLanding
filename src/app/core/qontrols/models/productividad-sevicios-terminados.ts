export class ServiciosTerminados
{
    id: string;
    paciente: string;
    medioDePago: string;
    comprobante: string;
    servicio: string;
    totalPagado: string;
    tarjeta: string; 
    dcto1: string;
    dcto2: string;
    comision: string;
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