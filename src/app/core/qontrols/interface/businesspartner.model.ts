import { Auditory } from "../models/auditory.model";
export class BusinessPartner extends Auditory {
    id?: string;
    agRet?: string;
    alternativeEmail?: string;
    approved?: string;
    balanceSys?: number;
    name?: string;
    businessPartnerCode?: string;
    comment?: string;
    commercialName?: string;
    companyId?: string;
    companyName?: string;
    creditBalance?: number;
    creditLine?: number;
    currency?: string;
    customerType?: string;
    email?: string;
    hasBusiness?: string;
    lastNameF?: string;
    lastNameM?: string;
    logicStatus?: number;
    migration?: string;
    migrationDate?: string;
    migrationMessage?: string;
    migrationStatus?: number;
    name2?: string;
    names?: string;
    nif?: string;
    partnerType?: string;
    paymentCondition?: number;
    personType?: number;
    phoneNumber?: string;
    parentCode?: string;
    priceList?: string;
    recordType?: number;
    agentType?: string;
    sunatAffectationType?: string;
    sunatOneroso?: string;
    sunatOperation?: string;
    sunatOperationType?: string;
    typeDocument?: string;
    uclSnLock?: string;
    addresses?: BusinessPartnerAddres[];
    contactPerson?: ContactPerson[];
    additionalData?: any;
    authData?: string;
    birthDate?: string;
    type?: string;
    segmentCode?: string;
    isCustomsWarehouse?: string;
    /*WORKER */
    indicatorExpirationQuota?: string;
    empVin?: string;
    dayExpirationQuota?: number;
    amountQuota?: number;
    creditLimitAmount?: number;
    /*UI */
    creditBalanceBefore?: number;
    parentType?: string;
    isTransportAgency?: string;
    points?: number;
}

export class BusinessPartnerAddres extends Auditory {
    id?: string;
    type: string;
    address: string;
    addressName: string;
    district: string;
    country: string;
    department: string;
    province: string;
    ubiquitous: string;
    invoicesCountry: string;
    rowNum: number;
}

export class ContactPerson extends Auditory {
    id?: string;
    code?: string;
    name: string;
    relationship: string;
    phone: string;
    cellPhoneNumber: string;
    address: string;
    email: string;
}
