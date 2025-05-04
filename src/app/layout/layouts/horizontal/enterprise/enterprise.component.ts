import {AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject, takeUntil} from 'rxjs';
import {FuseMediaWatcherService} from '@fuse/services/media-watcher';
import {FuseNavigationService, FuseVerticalNavigationComponent} from '@fuse/components/navigation';
import {Navigation} from 'app/core/navigation/navigation.types';
import {NavigationService} from 'app/core/navigation/navigation.service';
import {Empresa} from "../../../../core/qontrols/interface/Empresa";
import {getSelectedEmpresa, getSelectedSucursal, getUser, setLocalStorage} from "../../../../shared/util/utils/Storage";
import {User} from "../../../../core/user/user.model";
import {Sucursal} from "../../../../core/qontrols/interface/Sucursal";
import {EMPRESA_SELECTED, LOCAL_SELECTED} from "../../../../shared/util/constants/constants";

@Component({
    selector: 'enterprise-layout',
    templateUrl: './enterprise.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./enterprise.component.css']
})
export class EnterpriseLayoutComponent implements OnInit, OnDestroy, AfterViewInit {
    empresaSelected: Empresa;
    sucursalSelected: Sucursal;
    user: User;
    listEmpresas: Empresa[];
    listSucursales: Sucursal[];
    isScreenSmall: boolean;
    navigation: Navigation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    dataChildModal: any;
    accion: string;

    flexModalConfig = {
        modalPaciente: {
            title: 'Crear Paciente',
            width: '45%',
            height: '70%'
        }
    }

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
        /*private _modalService: ServiceModalService*/
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.empresaSelected = getSelectedEmpresa()

        this.sucursalSelected = getSelectedSucursal()
        this.user = getUser()
        this.listEmpresas = this.user.empresas
        this.listSucursales = this.listEmpresas
            .find(empresa => empresa.idUneg === this.empresaSelected.idUneg)?.sucursales || [];
        // Subscribe to navigation data
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;

            });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }

    seleccionarEmpresa(empresa: Empresa) {
        this.empresaSelected = empresa;
        this.sucursalSelected = null;
        this.listSucursales = this.listEmpresas
            .find(empresa => empresa.idUneg === this.empresaSelected.idUneg)?.sucursales || [];
        this.sucursalSelected = this.listSucursales.length > 0 ? this.listSucursales[0] : {};
        setLocalStorage(EMPRESA_SELECTED, empresa)
        setLocalStorage(LOCAL_SELECTED, this.sucursalSelected)
    }

    seleccionarSucursal(sucursal: Sucursal) {
        this.sucursalSelected = sucursal;
        setLocalStorage(LOCAL_SELECTED, this.sucursalSelected)
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
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    ngAfterViewInit() {

    }

    abrirModal(tipo: string, datos?: any, accion?: any) {

    }

    cerrarModal(tipo: string, data: any) {

    }
}
