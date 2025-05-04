import { Auditory} from "./auditory.model";

export class Dimenssion extends Auditory {
    id?: string;
    code?: string;
    description?:string;
}
export class DimenssionData extends Auditory {
    id?: string;
    code?: string;
    name?:string;
    dimension?:Dimenssion;
}
