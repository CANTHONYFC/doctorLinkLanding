import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { Fund } from "../models/fund.model";

@Injectable({
    providedIn: 'root',
})
export class FundService {
    private service: string = `${environment.serviceQontrolsEngine}fund`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Fund>> {
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

    get(id: string, _snackBar: MatSnackBar): Promise<ApiResponse<Fund>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/${id}`).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    add(fund: Fund, _snackBar: MatSnackBar): Promise<ApiResponse<Fund>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, fund).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    update(id: string, fund: Fund, _snackBar: MatSnackBar): Promise<ApiResponse<Fund>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}/${id}`, fund).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    delete(id: string, _snackBar: MatSnackBar): Promise<ApiResponse<Fund>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.delete<any>(`${this.service}/${id}`).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    settle(id: string, fund: Fund, _snackBar: MatSnackBar): Promise<ApiResponse<Fund>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}/settlement/${id}`, fund).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    requestSettlement(id: string, _snackBar: MatSnackBar): Promise<ApiResponse<Fund>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}/asksettlement/${id}`, {uniqueIdentifier: id}).
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
