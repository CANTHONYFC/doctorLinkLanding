import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";

import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { Project } from "../models/project.model";

@Injectable({
    providedIn: 'root',
})
export class UbigeoService {
    private service: string = `${environment.apiEngine}ubigeoDistrito`;
    private service2: string = `${environment.apiEngine}ubigeoProvincia`;
    private service3: string = `${environment.apiEngine}ubigeoDepartamento`;
    private service4: string = `${environment.apiEngine}Paises`;

    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) {}


    getDistritos(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/getDistritos`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    getProvincias(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service2}/getProvincias`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    getDepartamentos(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/getDepartamentos`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getPaises(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service4}/ByName`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
}
