import { Auditory } from "./auditory.model";

export class Category extends Auditory {
    id?: string;
    code?: string;
    name: string;
    salesUnit: string;
    taxCode: string;
    afeDet: string;
    codDet: string;
    porDet: number;
    type: string;
    clNMaxVt: number;
    inventoryUnit: string;
    salesItemsPerUnit: number;
    unitGroupEntry: number;
    priceList: PriceList[];
    companyId: string;
    uniqueIdentifier?: string;
    company?: string;
}

export class PriceList extends Auditory {
    id?: string;
    item: string;
    unitPrice: number;
    currency: string;
    unitMSR: string;
    unitMSRName: string;
    priceList: number;
    priceListName: string;
    isGrossPrice: string;
}
