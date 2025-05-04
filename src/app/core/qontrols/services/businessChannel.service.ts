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
export class BusinesChannelService {
    private service: string = `${environment.serviceQontrolsSetting}business-channel`;
    private serviceUser: string = `${environment.serviceGeneral}/setting-operation/business-channel-user`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) { }

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

    get(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Fund>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}-user`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }


    add(body: any, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.serviceUser}/add-list`, body).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    delete(id: string, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
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

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
