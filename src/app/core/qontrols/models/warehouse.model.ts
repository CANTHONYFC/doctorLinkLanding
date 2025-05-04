import { Auditory } from "./auditory.model";


export class Warehouse extends Auditory {
    id?: string;
    code: string;
    name: string;
    store: string;
    stores: any[];
    logicStatus: number;
    address: string;
    description: string;
    distributionList: string;
    companyId: string;
    companyName: string;

    ubications?: any[];

}

export class WarehouseStore extends Auditory {
    id?: string;
    code?: string;
    warehouse?: string;
    warehouseName?:string;
    store?: string;
    storeModel?: any;
    warehouseModel?: Warehouse;
    wsDefault?: string;

}