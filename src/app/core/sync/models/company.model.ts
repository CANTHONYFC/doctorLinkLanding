import {Auditory} from "../../shared/models/auditory.model";

export class Company extends Auditory{
    id?: string;
    code?: string;
    name: string;
    businessName?: string;
    urlLogo1?: string;
    urlLogo2?: string;
}
