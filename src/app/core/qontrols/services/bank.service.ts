import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { Bank } from "../models/bank.model";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { getSessionStorage } from "app/shared/util/utils/Storage";
import * as Constants from 'app/shared/util/constants/constants';

@Injectable({
    providedIn: 'root',
})
export class BankService {
    private service: string = `${environment.serviceSettingOperation}bank`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Bank>> {
        let company = getSessionStorage(Constants.SELECTED_COMPANY).id;
        if (company == "86358b87-9493-43fb-a4f5-cc224db4a2b5") company = "EISAC";
        let headers: HttpHeaders = new HttpHeaders().set('company', company);
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, {headers, params: parameters}).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        })
    }

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}