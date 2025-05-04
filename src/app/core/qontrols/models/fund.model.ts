import { Auditory } from "./auditory.model";

export class Fund extends Auditory {
    id?: string;
    code?: string;
    name: string;
    description: string;
    currency: string;
    amount?: number;
    amountAvailable?: number;
    amountAvailableForecast?: number;
    amountCharged?: number;
    amountChargedForecast?: number;
    statusOperation?: string;
    fundType: string;
    account?: string;
    fundAccount?:string;
    profileDTO: any;
    company: string;
    userUniqueId: string;
    uniqueIdentifier?: string;
    profileCenterCostDTO?: any;
    profileProjectDTO?: any;
    rol?: string;
    close?: string;
    commentRej?: string;
    urlWeb?: string;
}
