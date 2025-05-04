import { Auditory} from "./auditory.model";

export class PriceList extends Auditory {
    priceListCode?: string;
    appChannel?: string;
    name?: string;
    currency: string;
    isGrossPrice: string;
}
export class PriceListDetail extends Auditory {
    id?: string;
    item: string;
    unitPrice: number;
    store: string;
    logicStatus: number;
    tax: string;
    currency: string;
    grossPrice: number;
    applyTax: number;
    taxPercentage: number;
    unitMSR: string;
    unitMSRName: string;
    unitMSREntry: number;
    priceList: number;
    priceListType: string;
    priceListName: string;
    isGrossPrice: string;
    /* */
    itemCode?: string;
    price?: number;
    unitMsrCode: string;
    unitMsrName: string;
    unitMsrEntry: string;
}
