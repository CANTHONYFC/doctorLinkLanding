import { Auditory } from "./auditory.model";

export class Sheet extends Auditory {
    id?: string;
    code?: string;
    name: string;
    description: string;
    statusOperation: string;
    company: string;
    fundDTO: any;
    expenseDTOS: any;
    uniqueIdentifier?: string;
    approvalFlowDTOS?: any;

    userUniqueId: string;
}
