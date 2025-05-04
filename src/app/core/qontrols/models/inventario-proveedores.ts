export class Proveedores
{    
    id: string;
    nombre: string;
    telefono: string;
    email: string;
    empresa: string;
    cargo: string;
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