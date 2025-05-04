import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { map, delay } from "lodash";
import { Observable,Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";

@Injectable({
	providedIn: "root"
})
export class StoreService {

	private service: string = `${environment.serviceAdminOperation}store`;
	getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) { }

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

}
