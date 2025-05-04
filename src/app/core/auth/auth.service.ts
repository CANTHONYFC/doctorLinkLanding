import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError, ReplaySubject } from 'rxjs';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { passwordToHash } from 'app/shared/security/crypto';
import { clearStorageAndSession, getSessionStorage, saveObjectOnStorage, setLocalStorage, setSessionStorage } from 'app/shared/util/utils/Storage';
import * as Constants from 'app/shared/util/constants/constants';
import { User } from '../user/user.model';
import * as Constant from "../../shared/util/constants/constants";
import {ALLOWED_PERMISIONS, EMPRESA_SELECTED, LOCAL_SELECTED} from "app/shared/util/constants/constants";


@Injectable()
export class AuthService {
    private _authenticated: boolean = false;
    private service: string = `${environment.serviceSecEngine}auth`;
    private _openingCash: ReplaySubject<any> = new ReplaySubject<any>(1);
    private _company: ReplaySubject<any> = new ReplaySubject<any>(1);
    private _branchOffice: ReplaySubject<any> = new ReplaySubject<any>(1);
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) {
        localStorage.setItem('Token', token);
    }

    get accessToken(): string {
        return localStorage.getItem('Token') ?? '';
    }
    /**
         * Setter & getter for branchOffice
         */
    set branchSelected(value: any) {
        this._branchOffice.next(value);
        setLocalStorage(Constants.SELECTED_BRANCH_OFFICE, value);
    }
    get branchSelected$(): Observable<any[]> {
        return this._branchOffice.asObservable();
    }
    /**
     * Setter & getter for company
     */
    set companySelected(value: any) {
        this._company.next(value);
        setSessionStorage(Constants.SELECTED_COMPANY, value);
    }
    get companySelected$(): Observable<any[]> {
        return this._company.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { userName: string; password: string }): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }

        const headers = new HttpHeaders()
            .set('identifier', credentials.userName)
            /*.set('signature', passwordToHash(credentials.password, credentials.userName))*/
            .set('signature', credentials.password)
            .set('fingerprint', getSessionStorage(Constants.FINGERPRINT))
            .set('application', Constants.APP_POSSYSTEM_ALLOWED);

        return this._httpClient.post<any>(`${this.service}/login`, {}, {
            headers: headers,
            observe: 'response'
        }).pipe(
            switchMap((response: any) => {
                if (response.status == 200) {
                    if (response.body.successful) {

                        console.log(response.headers.keys());

                        // Store the access token in the local storage
                        if (response.headers.get("Token")) {
                            this.accessToken = response.headers.get("Token");
                            sessionStorage.setItem(Constants.TOKEN, response.headers.get("Token"));
                        }
                        let user = new User();
                        user.email = response.body.data.email;
                        user.name = response.body.data.name + ' ' + response.body.data.surname;
                        user.id = response.body.data.id;
                        user.avatar = response.body.data.image;
                        user.status = 'online';
                        user.documentNumber = response.body.data.documentNumber;
                        user = response.body.data;
                        // Set the authenticated flag to true
                        this._authenticated = true;
                        sessionStorage.setItem(Constants.USER, JSON.stringify(user));

                        setLocalStorage(Constant.ALLOWED_MENUS, response.body.menus);
                        setLocalStorage(Constant.ALLOWED_PERMISIONS, response.body.menus);

                        setLocalStorage(Constant.EMPRESA_SELECTED, response.body.data.empresas[0]);
                        setLocalStorage(Constant.LOCAL_SELECTED, response.body.data.empresas[0].sucursales[0]);
                        setLocalStorage(Constant.USER, user);
                        setLocalStorage('private360', response.body.data);
                        setLocalStorage(Constants.ENTITY, response.body.data.entity.id);
                        setLocalStorage(Constants.COMPANYS, response.body.data.entities);
                        saveObjectOnStorage(Constants.USER, user);
                        setLocalStorage(Constants.FINGERPRINT, getSessionStorage(Constants.FINGERPRINT));
                        if(response.body.data.entities.length==1){
                            this.companySelected =response.body.data.entity;
                        }
                        this._userService.user = user;

                    }
                    // Return a new observable with the response
                    return of(response.body);
                }
                return of(response);
            })
        );
    }

    /**
     * Sign in with google token
     *
     * @param credentials
     */
    signInWithGoogleToken(token : string): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }
        const headers = new HttpHeaders()
            .set('identifier', token)
            .set('fingerprint', getSessionStorage(Constants.FINGERPRINT))
            .set('application', Constants.APP_POSSYSTEM_ALLOWED);

        return this._httpClient.post<any>(`${this.service}/loginjwt`, {}, {
            headers: headers,
            observe: 'response'
        }).pipe(
            switchMap((response: any) => {
                if (response.status == 200) {
                    if (response.body.successful) {

                        console.log(response.headers.keys());
                        // Store the access token in the local storage
                        if (response.headers.get("Token")) {
                            this.accessToken = response.headers.get("Token");
                            sessionStorage.setItem(Constants.TOKEN, response.headers.get("Token"));
                        }
                        let user = new User();
                        user.email = response.body.data.email;
                        user.name = response.body.data.name + ' ' + response.body.data.surname;
                        user.id = response.body.data.id;
                        user.avatar = response.body.data.image;
                        user.status = 'online';
                        user.documentNumber = response.body.data.documentNumber;
                        user = response.body.data;
                        // Set the authenticated flag to true
                        this._authenticated = true;
                        sessionStorage.setItem(Constants.USER, JSON.stringify(user));
                        setLocalStorage('private360', response.body.data);
                        setLocalStorage(Constants.ENTITY, response.body.data.entity.id);
                        setLocalStorage(Constants.COMPANYS, response.body.data.entities);
                        saveObjectOnStorage(Constants.USER, user);
                        setLocalStorage(Constants.FINGERPRINT, getSessionStorage(Constants.FINGERPRINT));
                        if(response.body.data.entities.length==1){
                            this.companySelected =response.body.data.entity;
                        }
                        this._userService.user = user;
                    }
                    // Return a new observable with the response
                    return of(response.body);
                }
                return of(response);
            })
        );
    }
    exchangeCodeForTokens(token : string): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }
        const headers = new HttpHeaders()
            .set('identifier', token)
            .set('fingerprint', getSessionStorage(Constants.FINGERPRINT))
            .set('application', Constants.APP_POSSYSTEM_ALLOWED);

        return this._httpClient.post<any>(`${this.service}/RefreshTokenGmail`, {}, {
            headers: headers,
            observe: 'response'
        }).pipe(
            switchMap((response: any) => {
                if (response.status == 200) {
                    if (response.body.successful) {

                        console.log(response.headers.keys());

                        // Store the access token in the local storage
                        if (response.headers.get("Token")) {
                            this.accessToken = response.headers.get("Token");
                            sessionStorage.setItem(Constants.TOKEN, response.headers.get("Token"));
                        }
                        let user = new User();
                        user.email = response.body.data.email;
                        user.name = response.body.data.name + ' ' + response.body.data.surname;
                        user.id = response.body.data.id;
                        user.avatar = response.body.data.image;
                        user.status = 'online';
                        user.documentNumber = response.body.data.documentNumber;
                        user = response.body.data;
                        // Set the authenticated flag to true
                        this._authenticated = true;
                        sessionStorage.setItem(Constants.USER, JSON.stringify(user));

                        setLocalStorage(Constant.ALLOWED_MENUS, response.body.menus);
                        setLocalStorage(Constant.ALLOWED_PERMISIONS, response.body.menus);

                        setLocalStorage(Constant.EMPRESA_SELECTED, response.body.data.empresas[0]);
                        setLocalStorage(Constant.LOCAL_SELECTED, response.body.data.empresas[0].sucursales[0]);
                        setLocalStorage(Constant.USER, user);
                        setLocalStorage('private360', response.body.data);
                        setLocalStorage(Constants.ENTITY, response.body.data.entity.id);
                        setLocalStorage(Constants.COMPANYS, response.body.data.entities);
                        saveObjectOnStorage(Constants.USER, user);
                        setLocalStorage(Constants.FINGERPRINT, getSessionStorage(Constants.FINGERPRINT));
                        if(response.body.data.entities.length==1){
                            this.companySelected =response.body.data.entity;
                        }
                        this._userService.user = user;

                    }
                    // Return a new observable with the response
                    return of(response.body);
                }
                return of(response);
            })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        // Renew token
        return this._httpClient.post('api/auth/refresh-access-token', {
            accessToken: this.accessToken
        }).pipe(
            catchError(() =>

                // Return false
                of(false)
            ),
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return true
                return of(true);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {

        // Remove the access token from the local storage
        clearStorageAndSession();
        // Set the authenticated flag to false
        this._authenticated = false;
        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any> {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    ngOnInit() {
        this.checkAuthentication();
    }

    checkAuthentication() {

        const token = localStorage.getItem(Constant.TOKEN);
        const user = localStorage.getItem(Constant.USER); // Obtener usuario desde localStorage

        this._authenticated = !!token; // Convierte el token en booleano

        if (this._authenticated && user) {
            sessionStorage.setItem(Constant.USER, user); // Guardar usuario en sessionStorage
        }
    }


    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
       this.checkAuthentication()
        if (this._authenticated) {
            return of(true);
        }
        if (!this.accessToken) {
            return of(false);
        }
        return of(true);
    }
}
