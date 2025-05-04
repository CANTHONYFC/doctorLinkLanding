import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { openSnackBarError } from 'app/shared/util/operations/operations';
import { StockTransfer } from '../models/stock.transfer.model';
import { ApiResponse } from '../interface/response/api.response';

@Injectable({
    providedIn: 'root',
})
export class TransferService {
    private service: string = `${environment.serviceCoreEngine}stock-transfer`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) { }

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<StockTransfer>> {
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

    add(stockTransfer: StockTransfer, _snackBar: MatSnackBar): Promise<ApiResponse<StockTransfer>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, stockTransfer).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }
    update(stockTransfer: StockTransfer, _snackBar: MatSnackBar): Promise<ApiResponse<StockTransfer>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}`, stockTransfer).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }
    reserve(stockTransfer: StockTransfer, _snackBar: MatSnackBar): Promise<ApiResponse<StockTransfer>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}/reserve`, { id: stockTransfer.id }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }
    unSub() {
        this.getSubscription?.unsubscribe();
    }

}
