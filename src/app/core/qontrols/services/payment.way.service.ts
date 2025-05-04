import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse, ApiResponse_Deprecated } from "../interface/response/api.response";
import { PaymentWay } from "../models/payment.way.model";

@Injectable({
    providedIn: 'root',
})
export class PaymentWayService {
    private service: string = `${environment.serviceAdminOperation}payment-way`;
    private getSubscription: Subscription;

    constructor(
        private _httpClient: HttpClient
    ){}

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<PaymentWay>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, { params: parameters })
                .subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                });
        });
    }

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
