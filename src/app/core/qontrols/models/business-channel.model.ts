import {Auditory} from "../../shared/models/auditory.model";


export class BusinessChannelModel extends Auditory{
    businessChannelCode?:string;
    name?:string;
    company:string;
    approvalApplies?:string;
    businessChannelPriceLists?:BusinessChannelPriceListDTO[]=[];
}

export class BusinessChannelPriceListDTO {
    id?:string;
    businessChannelPriceListCode?:string;
    businessChannelCode?:string;
    businessChannelName?:string;
    priceListCode?:string;
    priceListName?:string;
    company?:string;
}
