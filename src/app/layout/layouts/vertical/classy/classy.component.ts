import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {FuseMediaWatcherService} from '@fuse/services/media-watcher';
import {FuseNavigationService, FuseVerticalNavigationComponent} from '@fuse/components/navigation';
import {Navigation} from 'app/core/navigation/navigation.types';
import {NavigationService} from 'app/core/navigation/navigation.service';
import {UserService} from 'app/core/user/user.service';
import {User} from 'app/core/user/user.model';
import {AuthService} from 'app/core/auth/auth.service';
import {getLocalStorage, getSessionStorage} from 'app/shared/util/utils/Storage';
import * as Constants from 'app/shared/util/constants/constants';
import {Router} from '@angular/router';

@Component({
    selector: 'classy-layout',
    templateUrl: './classy.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {
    isScreenSmall: boolean;
    navigation: Navigation;
    user: User;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    branchSelected: any;
    openingCashSelected: any;
    companySelected: any;
    rutaActual: string;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _navigationService: NavigationService,
        private _userService: UserService,
        private _router: Router,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService
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

        this.branchSelected = getLocalStorage(Constants.SELECTED_BRANCH_OFFICE);
        this.openingCashSelected = getLocalStorage(Constants.SELECTED_OPENING_CASH);
        this.companySelected = getSessionStorage(Constants.SELECTED_COMPANY);
        this.user = getSessionStorage(Constants.USER);

        // Subscribe to navigation data
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;
            });

        // Subscribe to the user service
        // this._userService.user$
        //     .pipe((takeUntil(this._unsubscribeAll)))
        //     .subscribe((user: User) => {
        //         this.user = user;
        //         console.log(this.user);
        //     });

        // this._authService.companySelected$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((data: any) => {
        //         this.companySelected = data;
        //     });

        // this._authService.branchSelected$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((data: any) => {
        //         this.branchSelected = data;
        // });


        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });
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

    /**
     * Sign out
     */
    signOut(): void {
        this._authService.signOut();
        location.reload();
    }

    splitAndFormatRoute(route: string): string[] {
        return route.split('/');
    }

}
