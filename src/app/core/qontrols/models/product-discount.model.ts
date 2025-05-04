import {Auditory} from "./auditory.model";

export class ProductDiscountModel extends Auditory {

    id?:string;
    numberDscto?: string;
    name?: string;
    //channelCode?: string;
    //channelName?: string;
    situation?: string;
    startDate?: string;
    endDate?: string;
    criterion?: string;
    specificClients?: boolean;
    channelDiscountDTO?:ChannelDiscount;
    clientsDTOS?: Clients[];
    detailDTOS?: Detail[];
    businessDiscountDetailDTOList?: BusinessDiscountDetail[];
}

export class ChannelDiscount{
    uniqueIdentifier?:string;
    channelCode?:string;
    channelName?:string;
    discount1?:number;
    discount2?:number;
    discount3?:number;
}

export class BusinessDiscountDetail {
    id?:number;
    businessCode?: string;
    businessName?: string;
    discount1?:    number;
    discount2?:    number;
    discount3?:    number;
}

export class Clients {
    id?:number;
    clientCode?:   string;
    clientName?: string;
}

export class Detail {
    id?:number;
    idProduct?:               string;
    productName?:             string;
    codigoProd?:              string;
    codVenta?:                string;
    productDiscountRangeDTO?: ProductDiscountRange[];
}

export class ProductDiscountRange {
    id?:number;
    minQuantity?: string;
    maxQuantity?: string;
    discount4?:   string;
}

