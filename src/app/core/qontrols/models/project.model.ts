import { Auditory } from "./auditory.model";

export class Project extends Auditory {
    id?: string;
    code?: string;
    name: string;
    validFrom: string;
    validTo: string;
    active: string;
    uniqueIdentifier?: string;
    company?: string;
}
