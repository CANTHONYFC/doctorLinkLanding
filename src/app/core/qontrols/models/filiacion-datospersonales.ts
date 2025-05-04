export class Familiares
{    
    id: string;
    nombre: string;
    nroDoc: string;
    telefono: string;
    email: string;
    apoderado: string;


    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}