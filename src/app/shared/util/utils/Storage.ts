import { Empresa } from 'app/core/qontrols/interface/Empresa';
import { UserInfoEntity } from 'app/core/qontrols/interface/user-info.entity';
import { MemberModel } from '../../../core/qontrols/interface/member.model';
import {USER_INFO, USER, EMPRESA_SELECTED, LOCAL_SELECTED} from '../constants/constants';
import {Sucursal} from "../../../core/qontrols/interface/Sucursal";
import { User } from 'app/core/user/user.model';

export const setSessionStorage = (name: string, value: any) => sessionStorage.setItem(name, JSON.stringify(value));

export const getSessionStorage = (name: string): any => JSON.parse(sessionStorage.getItem(name)) ?? '';

export const setLocalStorage = (name: string, value: any) => localStorage.setItem(name, JSON.stringify(value));

export const getLocalStorage = (name: string): any => JSON.parse(localStorage.getItem(name)) ?? '';
export function saveObjectOnStorage(model_name: string, model: any): void {
    sessionStorage.setItem(model_name, JSON.stringify(model));
}
export const clearStorageAndSession = function () {

    localStorage.clear();
    sessionStorage.clear();
}
export function getLoggedUser(): MemberModel {
	return JSON.parse(sessionStorage.getItem(USER));
}

export function getUserInfo(): UserInfoEntity {
	let userInfo: UserInfoEntity = JSON.parse(sessionStorage.getItem(USER_INFO));
	return userInfo || {};
}
export function getUser(): User {
    let user: User = JSON.parse(localStorage.getItem(USER));
    return user || {};
}

export function getSelectedEmpresa(): Empresa {
    let json =JSON.parse(localStorage.getItem(EMPRESA_SELECTED))

    let empresa: Empresa = json;
    return empresa || {};
}
export function getSelectedSucursal(): Sucursal {
    let sucursal: Sucursal = JSON.parse(localStorage.getItem(LOCAL_SELECTED));
    return sucursal || {};
}


