export class ordenLab
{    
    id: string;
    servicio: string;
    nroCliente: string;
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