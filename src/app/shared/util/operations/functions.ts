import { HttpParams } from "@angular/common/http";
import { USER } from "../constants/constants";
import { getSessionStorage } from "../utils/Storage";

export const onlyNumberKey = function (event) {
    return event.charCode == 8 || event.charCode == 0
        ? null
        : (event.charCode >= 48 && event.charCode <= 57) ||
        event.charCode == 46 ||
        event.charCode == 13;
}
export const httpParamDefault = function (parameters: {
    filter?: string,
    page?: number,
    itemPerPage?: number,
    size?: number,
}) {
    let params = new HttpParams();
    params = parameters.page ? params.append('page', parameters.page) : params;
    params = parameters.filter ? params.append('filter', parameters.filter) : params;
    params = parameters.itemPerPage ? params.append('itemPerPage', parameters.itemPerPage) : params;
    params = parameters.size ? params.append('size', parameters.size) : params;
    return params;
}

export const createUserAuditory = function (auditory: any, user = getSessionStorage(USER)) {
    auditory.createUser = user.id;
    auditory.createUserName = user.name + ' ' + user.surname;
    auditory.createUserMail = user.email;
}

export const updateUserAuditory = function (auditory: any, user = getSessionStorage(USER)) {
    auditory.updateUser = user.id;
    auditory.updateUserName = user.name + ' ' + user.surname;
    auditory.updateUserMail = user.email;
}

export const deleteUserAuditory = function (auditory: any, user = getSessionStorage(USER)) {
    auditory.deleteUser = user.id;
    auditory.deleteUserName = user.name + ' ' + user.surname;
    auditory.deleteUserMail = user.email;
}
