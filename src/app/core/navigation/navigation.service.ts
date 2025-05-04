import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { Router } from '@angular/router';
import { Validation } from './Validation';
import {clearStorageAndSession, getLocalStorage, getSessionStorage} from "../../shared/util/utils/Storage";
import * as Constant from "../../shared/util/constants/constants";
import {USER} from "../../shared/util/constants/constants";

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);
    private param: { path: string; data: any }[] = [];
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, private router: Router) {

    }
    public navigateWithParameter(route: string, parameter: any) {
        this.param.push({ path: route, data: parameter });
        this.router.navigate([route]);
    }

    public getParameterByPath(path: string): any {
        return this.param.find(p => p.path.includes(path));
    }

    public resetParameterByPath(path: string): void {
        this.param.splice(this.param.findIndex(p => p.path.includes(path)), 1);
    }
    public resetParameterAll(): void {
        this.param = [];
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation> {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation> {
        //localStorage.clear();
        //sessionStorage.clear();
        //location.reload();

        return this._httpClient.get<Navigation>('api/common/navigation').pipe(
            tap((navigation) => {

                /*console.log(navigation,Validation.validateAccess());
                console.log(location.href);*/
                this._navigation.next(navigation);
            })
        );
    }
    put(body): Observable<Navigation> {
        console.log('%c%s', 'color: yellow; font-weight: bold; font-size: 20px;', "put navigation");
        return this._httpClient.put<Navigation>('api/common/navigation',body).pipe(
            tap((navigation) => {
                this._navigation.next(navigation);
            })
        );
    }
    update(){

        if (!getSessionStorage(USER)) {
            clearStorageAndSession();
            location.reload();
            return;
        }

        let data=getLocalStorage(Constant.ALLOWED_MENUS)

        this.put(data).subscribe(_r => {
        })
    }

}
