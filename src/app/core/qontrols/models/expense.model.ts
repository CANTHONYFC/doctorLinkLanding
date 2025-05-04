import { Auditory } from "./auditory.model";

export class Expense extends Auditory {
    id?: string;
    businesspartner?: string;
    businessName: string;
    numSerie: string;
    numCorrelativo: string;
    docNum: string;
    subTotal: number;
    tax: number;
    total: number;
    exchangeRate: number;
    subTotalF: number;
    taxF: number;
    totalF: number;
    currency: string;
    comment: string;
    date?: string;
    dateCot?: string;
    dateEmi?: string;
    posDate?: string;
    company: string;
    uniqueIdentifier?: string;
    typeDocument?: string;
    userUniqueId: string;
    typeExpense?: string;
    profileDTO: any;
    expenseDetailDTOS: ExpenseDetailDTO[];
}

export class ExpenseDetailDTO extends Auditory {
    id?: string;
    company: string;
    origin?: string;
    destiny?:string;
    date?:any;
    reason?:string;
    description?:string;
    amount: number;
    quantity?: number;
    taxPerc?:string;
    price?: string;
    projectCode?: string;
    centerCostCodes?:string;
    profileCategoryDTO: any;
    uniqueIdentifier?: string;
}
