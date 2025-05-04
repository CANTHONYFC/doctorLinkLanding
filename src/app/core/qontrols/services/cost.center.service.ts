import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { CostCenter } from "../models/cost.center.model";

@Injectable({
    providedIn: 'root',
})
export class CostCenterService {
    private service: string = `${environment.serviceSettingOperation}costCenter`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    list(parameters: HttpParams, company: string, _snackBar: MatSnackBar): Promise<ApiResponse<CostCenter>> {
        let headers: HttpHeaders = new HttpHeaders().set('company', company);
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, {headers, params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    add(costCenter: CostCenter, _snackBar: MatSnackBar): Promise<ApiResponse<CostCenter>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, costCenter).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
