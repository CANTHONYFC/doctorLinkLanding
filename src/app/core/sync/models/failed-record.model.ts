export class FailedRecord{
    id?:string;
    originRecord?: Record;
    destinyRecord?: Record;
    sequenceId?:string;
    processType?:string;
    errorCode?:number;
    errorMessage?:string;
    status?:number;
    active?:number;
}

export class Record{
    id?: string;
    code?: string;
    identifierName?: string;
    identifierValue?: string;
    absoluteURI?: string;
    data?: string;
    dataSignature?: string;
}
