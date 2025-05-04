import {Auditory} from "../../shared/models/auditory.model";

export class SaleForceDiscountModel extends Auditory{

    id?:string;
    discountCode?:string;
    correlative?:string;
    gloss?:string;
    type?:string;
    startDate?:string;
    endDate?:string;
    discountDetailDTOList?:SaleForceDiscountDetailModel[]=[];
}

export class SaleForceDiscountDetailModel{

    id?:number;
    discountId?: string;
    discountCode?:string;

    businessChannelCode?:string;
    businessChannelName?:string;

    lineBusinessCode?:string;
    lineBusinessName?:string;

    businessPartnerCode?:string;
    businessPartnerName?:string;

    itemUnique?:string;
    itemVendorCode?:string;
    itemCode?:string;
    itemName?:string;
    //minQuantity?:number;
    //maxQuantity?:number;
    discount1?:number;
    discount2?:number;
    discount3?:number;
    //discount4?:number;

    itemRangesDTOList? : ItemRanges[]=[];

}

export class ItemRanges{
    id?: number;
    itemUnique?:string;
    minQuantity?: number;
    maxQuantity?: number;
    discount4?: number;
}


