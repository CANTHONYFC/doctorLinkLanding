export class IngresosEgresos
{
    id: string;
    hora?: string;
    doctor: string;
    precio?: string;
    paciente?: string; 
    concepto?: string;
    stock: number;
    reserved: number;
    price: number;
    weight: number;
    active: boolean;
    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

