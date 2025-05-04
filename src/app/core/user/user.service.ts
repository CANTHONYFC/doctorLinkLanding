import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, ReplaySubject, tap} from 'rxjs';
import {User} from 'app/core/user/user.model';
import {environment} from 'environments/environment';
import {MatLegacySnackBar as MatSnackBar} from '@angular/material/legacy-snack-bar';
import {ApiResponse} from '../qontrols/interface/response/api.response';
import {openSnackBarError} from 'app/shared/util/operations/operations';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private service: string = `${environment.serviceGeneral}user`;
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User) {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable<User> {
        return this._httpClient.get<User>('api/common/user').pipe(
            tap((user) => {
                this._user.next(user);
            })
        );
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any> {
        return this._httpClient.patch<User>('api/common/user', {user}).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }

    getUser(idUser: string): Observable<any> {
        return this._httpClient.get<any>(
            `${this.service}/info/` + idUser
        );
    }

    getUserById(idUser: string, _snackBar: MatSnackBar): Promise<ApiResponse<User>> {
        return new Promise((resolve) => {
            this._httpClient.get<any>(`${this.service}-info/` + idUser).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar)
                }
            })
        });
    }
}
