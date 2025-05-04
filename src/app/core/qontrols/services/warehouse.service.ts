import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { openSnackBarError } from 'app/shared/util/operations/operations';
import { ApiResponse } from '../interface/response/api.response';
import { Warehouse } from '../models/warehouse.model';

@Injectable({
    providedIn: 'root',
})
export class WarehouseService {
    private service: string = `${environment.serviceAdminOperation}warehouse`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) { }

    search(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Warehouse>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }
    searchWarehouseStore(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Warehouse>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}-store`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }
    unSub(){
        this.getSubscription?.unsubscribe();
    }

}
