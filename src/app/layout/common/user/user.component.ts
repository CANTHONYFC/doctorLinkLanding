import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {Router} from '@angular/router';
import {BooleanInput} from '@angular/cdk/coercion';
import {Subject} from 'rxjs';
import {User} from 'app/core/user/user.model';
import {UserService} from 'app/core/user/user.service';
import {getLocalStorage, getSessionStorage, getUser} from "../../../shared/util/utils/Storage";
import * as Constants from "../../../shared/util/constants/constants";
import * as Constant from "../../../shared/util/constants/constants";
import {mn_perfil_shown, mn_setting_organization_shown} from "../../../shared/util/constants/menus";
import * as constanst from "../../../shared/util/constants/route";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {NavigationService} from "../../../core/navigation/navigation.service";
import {FuseNavigationItem} from "../../../../@fuse/components/navigation";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user'
})
export class UserComponent implements OnInit, OnDestroy {
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */
    hideConfigOrganization = false;
    hideConfigPerfil = false;
    @Input() showAvatar: boolean = true;
    user: User = getUser();

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    navigationDefault: FuseNavigationItem[] = [];
    userSession: any;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _userService: UserService,
        private _snackBar: MatSnackBar,
        private _navigationService: NavigationService
    ) {
        this._navigationService.update();
    }

    async setCompany() {

        this.userSession = getSessionStorage(Constant.USER);
        // this.getCashierAssigned();
        // await this.master();
        this.searchPermission();
    }

    searchPermission(): void {

    }

    setNavigation(navigationPermision: any) {

    }

    validatePath(pathviews: any): void {

        let pv = Object.values(pathviews);
        const loc = location.hash.slice(1);

        let status = pv.some(p => (p['link'] == loc && !p['hidden']));

        pathviews.some(menu => {
            if (loc.startsWith(menu.link)) {
                status = true;
            }
        });
        console.log(status ? 'Permanecer' : 'Salir');

        if (!status) {

            //Si no tiene permiso salir
            localStorage.clear();
            sessionStorage.clear();
            location.reload();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._navigationService.get().subscribe(r => {
            this.navigationDefault = r.default;
        })
        this.setCompany();
        let menus = getLocalStorage(Constants.ALLOWED_PERMISIONS);
        this.user
        if (menus != "") {
            this.hideConfigOrganization = menus.some(menu => menu.code === mn_setting_organization_shown);
            this.hideConfigPerfil = menus.some(menu => menu.code === mn_perfil_shown);
        }

    }

    goToSetting(): void {
        let url = constanst.ROUTES.setting
        this._router.navigate([url]);
    }

    goToSettingOrganization(): void {
        let url = constanst.ROUTES.settingOrganization
        this._router.navigate([url]);
    }

    goToSettingPerfil(): void {
        let url = constanst.ROUTES.perfil
        this._router.navigate([url]);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the user status
     *
     * @param status
     */
    updateUserStatus(status: string): void {
        // Return if user is not available
        if (!this.user) {
            return;
        }

        // Update the user
        this._userService.update({
            ...this.user,
            status
        }).subscribe();
    }

    /**
     * Sign out
     */
    signOut(): void {
        this._router.navigate(['/sign-out']);
    }
}
