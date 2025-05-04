import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import * as Constants from 'app/shared/util/constants/constants';
import {getLocalStorage, getSessionStorage} from 'app/shared/util/utils/Storage';
import {AUTHORIZATION} from "app/shared/util/constants/constants";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     * Constructor
     */
    constructor(private _authService: AuthService) {
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token, fingerprint, company;
       // Clone the request object
       let newReq = req.clone();
       let signature = req.headers.get(Constants.SIGNATURE), appplication = req.headers.get(Constants.APPLICATION);
       if (this._authService.accessToken) {
            if (req.headers.get(Constants.TOKEN)) {
                token = req.headers.get(Constants.TOKEN);
            }
            else {
                token = this._authService.accessToken;
            }
            if (req.headers.get(Constants.FINGERPRINT)) {
                fingerprint = req.headers.get(Constants.FINGERPRINT);
            }
            else {
                fingerprint = getLocalStorage(Constants.FINGERPRINT);
            }
            if (req.headers.get(Constants.COMPANY)) {
                company = req.headers.get(Constants.COMPANY);
            }
            else {
                company = getLocalStorage(Constants.USER_INFO)?.companyObject?.code || '';
                company = getLocalStorage(Constants.USER)?.entities[0]?.id;
            }
           let header = req.headers.
               set(Constants.TOKEN, token).
               set(Constants.AUTHORIZATION, "Bearer "+token).
               set(Constants.ENTITY, getLocalStorage(Constants.ENTITY)).
               set(Constants.COMPANY, company).
               set(Constants.FINGERPRINT, fingerprint).
               set(Constants.SIGNATURE, !signature ? Constants.MY_SIGNATURE : signature).
               set(Constants.APPLICATION, !appplication ? Constants.APP_SYSTEM_ALLOWED : appplication);
           // console.log(header);
           newReq = req.clone({
               headers: header
           });
       }


        // Response
        return next.handle(newReq).pipe(
            catchError((error) => {

                // Catch "401 Unauthorized" responses
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    // Sign out
                    this._authService.signOut();

                    // Reload the app
                    location.reload();
                }

                return throwError(error);
            })
        );
    }
}
