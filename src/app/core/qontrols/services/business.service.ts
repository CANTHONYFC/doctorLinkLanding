import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map, catchError, repeatWhen, delay } from "rxjs/operators";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";

@Injectable({
	providedIn: "root"
})
export class BusinessService {
	private service: string = `${environment.serviceAdminOperation}company`;
    getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

	public getListSociety(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
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
