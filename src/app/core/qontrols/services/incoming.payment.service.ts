import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { IncomingPayment } from "../models/incoming.payment.model";

@Injectable({
    providedIn: 'root',
})
export class IncomingPaymentService {
    private service: string = `${environment.serviceQontrolsEngine}incomingPayment`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient){}

    list(parameters: HttpParams, _snackbar: MatSnackBar): Promise<ApiResponse<IncomingPayment>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackbar);
                    }
                })
        });
    }

    add(incomingPayment: IncomingPayment, _snackBar: MatSnackBar): Promise<ApiResponse<IncomingPayment>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, incomingPayment).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    update(id: string, incomingPayment: IncomingPayment, _snackBar: MatSnackBar): Promise<ApiResponse<IncomingPayment>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}/${id}`, incomingPayment).
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
