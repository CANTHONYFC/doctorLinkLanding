import { Auditory} from "./auditory.model";

export class ModelItem extends Auditory {
    id?: string;
    modelCode?: string;
    modelName?: string;
    itemCode?: string;
    itemName?: string;
    percentageDistribution?: number;
}
