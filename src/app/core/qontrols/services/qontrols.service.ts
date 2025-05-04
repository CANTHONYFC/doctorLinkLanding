import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { Sheet } from "../models/sheet.model";
import {EmailOject} from "../../../modules/qontrols/EmailOject";

@Injectable({
    providedIn: 'root',
})
export class QontrolsService {
    private service: string = `${environment.serviceQontrolsEngine}notification`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) {}
        addSendNotification(emailOject: EmailOject, _snackBar: MatSnackBar): Promise<ApiResponse<EmailOject>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/addNotification`, emailOject)
                .subscribe({
                    next: (data) => {
                        resolve(data);
                    },
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
