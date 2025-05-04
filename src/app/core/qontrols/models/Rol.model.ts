export class Rol
{
    idUneg: number;
    id?: string;
    name?: string;
    normalizedName?: string;
    concurrencyStamp?: string;
    estadoReg?: boolean;
    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

