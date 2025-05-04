import { Auditory } from "./auditory.model";

export class CostCenter extends Auditory {
    id?: string;
    code?: string;
    name: string;
    inWhichDimension: number;
    effectiveFrom: string;
    effectiveTo: string;
    active: string;
    uniqueIdentifier?: string;
    company?: string;
}
