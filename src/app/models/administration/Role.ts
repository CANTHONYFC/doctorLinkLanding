export class Role{
    name: string = '';
    normalizedName: string = '';
    concurrencyStamp: string = '';
    id_uneg : number = 0;
    estadoReg : boolean = false;
    estadoDescripcion : string = '';

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
