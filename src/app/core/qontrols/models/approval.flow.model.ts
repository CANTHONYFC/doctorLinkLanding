import { Auditory } from "./auditory.model";

export class ApprovalFlow extends Auditory {
    id?: string;
    company: string;
    uniqueIdentifier?: string;

    sheetDTO: any;
}
