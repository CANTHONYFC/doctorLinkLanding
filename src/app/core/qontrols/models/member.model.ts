import { Auditory } from "./auditory.model";

export class Member extends Auditory {
    id?: number;
    code?: string;
    nameUser: string;
    type: string;
    uniqueIdentifier?: string;
    userUniqueId: string;
    empID: string;
    level?: number;
    company: string;
}
