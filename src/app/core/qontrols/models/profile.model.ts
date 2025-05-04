import { Auditory } from "./auditory.model";

export class Profile extends Auditory{
    id?: string;
    code?: string;
    description: string;
    name: string;
    uniqueIdentifier?: string;
    profileCategoryDTO: any;
    profileCenterCostDTO: any;
    profileProjectDTO: any;
    profileUserDTO?: any;
    company: string;
    profileCenterCostDTOTemp?:any;
}
