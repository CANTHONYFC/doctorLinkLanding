export class Pacientes
{
    id: string;
    nombre: string;
    ultimaCita: string;
    proximaCita: string;
    tarea: string;
    presupuesto: string;
    fuenteCaptacion: string;
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

