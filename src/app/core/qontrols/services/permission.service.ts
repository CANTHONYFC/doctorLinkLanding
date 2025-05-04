import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { Permission } from '../models/permission.model';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ApiResponse } from '../interface/response/api.response';
import { openSnackBarError } from 'app/shared/util/operations/operations';
import { APP_SYSTEM_ALLOWED } from 'app/shared/util/constants/constants';
import {ParametrosGenerales} from "../models/ParametrosGenerales";

@Injectable({
    providedIn: 'root',
})
export class PermissionService {
    private service: string = `${environment.serviceSecEngine}permission`;
    private service2: string = `${environment.apiEngine}sucursal`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) { }

    search(_snackBar: MatSnackBar, idUneg: number,idSucursal:number): Promise<ApiResponse<Permission>> {
        const params = new HttpParams().set('idUneg', idUneg.toString())
            .set('idSucursal',idSucursal.toString());
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/`+APP_SYSTEM_ALLOWED,{ params }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    obtenerCorrelativoSucursal(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service2}/obtenerCorrelativoSucursal`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    add(permission: Permission, _snackBar: MatSnackBar): Promise<ApiResponse<Permission>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, permission).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    update(permission: Permission, _snackBar: MatSnackBar): Promise<ApiResponse<Permission>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}`, permission).
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
