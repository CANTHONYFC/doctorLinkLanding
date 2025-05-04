import { Auditory } from "./auditory.model";

export class ApprovalStepFlow extends Auditory {
    id?: string;
    approved: string;
    message: string;
    rol: string;
    approvalFlowUniqueId: string;
    company: string;
    uniqueIdentifier?: string;
    userUniqueId: string;
}
