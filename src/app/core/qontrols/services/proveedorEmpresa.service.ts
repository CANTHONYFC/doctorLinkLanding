import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";

import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { Proveedor } from "../models/Proveedor";
import { EmpresaProveedor } from "../models/EmpresaProveedor";

@Injectable({
    providedIn: 'root',
})
export class ProveedorEmpresaService {
    private service: string = `${environment.apiEngine}EmpresaProveedor`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) {}
    

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EmpresaProveedor>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/empresaProveedorPaginate`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    create(data: EmpresaProveedor, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EmpresaProveedor>> {
        let m = data.id_empresaProveedor > 0 ?  'updateEmpresaProveedor' : 'register-empresa-proveedor';
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/${m}`, data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    update(data: Proveedor, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Proveedor>> {
        let m = data.id_proveedor ? 'update' :'create';
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/${m}`, data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    updatestatus(data: Proveedor, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Proveedor>> {
        let m = 'update-status';
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/${m}`, data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
}