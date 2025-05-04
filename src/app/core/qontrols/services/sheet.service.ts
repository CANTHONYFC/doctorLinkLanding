import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { Sheet } from "../models/sheet.model";

@Injectable({
    providedIn: 'root',
})
export class SheetService {
    private service: string = `${environment.serviceQontrolsEngine}sheet`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    list(parameters: HttpParams, _snackbar: MatSnackBar): Promise<ApiResponse<Sheet>> {
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

    get(id: string, _snackBar: MatSnackBar): Promise<ApiResponse<Sheet>> {
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

    add(sheet: Sheet, _snackBar: MatSnackBar): Promise<ApiResponse<Sheet>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, sheet).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    update(id: string, sheet: Sheet, _snackBar: MatSnackBar): Promise<ApiResponse<Sheet>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}/${id}`, sheet).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    delete(id: string, _snackBar: MatSnackBar): Promise<ApiResponse<Sheet>> {
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
