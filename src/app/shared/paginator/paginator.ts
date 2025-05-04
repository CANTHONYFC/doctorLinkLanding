import {getSelectedEmpresa, getSessionStorage, getUserInfo} from "../util/utils/Storage";
import * as Constants from "../util/constants/constants";

export class Paginator {
    options: number[];
    count: number;
    parameter: any;
    parameterDiscount: any;
    size: number;
    index: number;
    search: (data) => void;

    constructor() {
        this.options = [5, 10, 30, 100];
        this.count = 5;
        this.parameter = {filter: '', page: 0, size: 5, type: '', sorting: '', idUneg: getSelectedEmpresa().idUneg};
        this.parameterDiscount = {
            filter: '',
            criterion: '',
            channel: '',
            page: 0,
            size: 5
        };

    }
}
