import {getSelectedEmpresa, getSelectedSucursal, setLocalStorage} from "../../../shared/util/utils/Storage";
import * as Constant from "../../../shared/util/constants/constants";
import {openSnackBarError} from "../../../shared/util/operations/operations";
import {PermissionService} from "../../qontrols/services/permission.service";
import {
    mn_caja_shown,
    mn_perfil_shown,
    mn_setting_organization_shown,
    mn_whattsap_shown
} from "../../../shared/util/constants/menus";
import * as constanst from "../../../shared/util/constants/route";
import {dE} from "@fullcalendar/core/internal-common";

export class Validation {
    static async  hasAccess(route: string, _permissionService: PermissionService): Promise<boolean> {

        const menu = localStorage.getItem('Menus');

        const empresa=getSelectedEmpresa()
        const sucursal=getSelectedSucursal()


        try {

            const response = await _permissionService.search(null, empresa.idUneg,sucursal.idSucursal);
            if (response.successful && Array.isArray(response.data)) {

                if(response.data.length==0){
                    console.log('Error al obtener permisos:'+empresa.razonSocial);
                    openSnackBarError(null,"No tienes permisos para "+empresa.razonSocial)
                    return false;
                }
                return response.data.some(menu => {
                    const fullPath = constanst.ROUTES_APP.app + constanst.ROUTES_APP.source + menu.path;

                    if (menu.code === mn_whattsap_shown) {
                        return route.startsWith(fullPath);
                    } else if (menu.code === mn_perfil_shown) {
                        return route.startsWith(fullPath);
                    }else {
                        return fullPath === route;
                    }
                });

            }
        } catch (error) {
            console.error('Error al obtener permisos:', error);
        }

        return false;
    }

    static getCurrentRoute(): string {
        return window.location.pathname;
    }

    static getCurrentRouteByHash(): string {
        return window.location.hash.slice(1);
    }

    static validateAccess(currentRoute:string,_permissionService: PermissionService): void {

          this.hasAccess(currentRoute,_permissionService).then(access => {

        console.log('%cSalida::::::', 'color: red; font-weight: bold;');
        console.log(access,currentRoute);
        console.log('%cSalida::::::', 'color: yellow; font-weight: bold;');

        if(!access){
            console.log('salir1');
            localStorage.clear();
            sessionStorage.clear();
            location.reload();
        }
        });
    }
}
