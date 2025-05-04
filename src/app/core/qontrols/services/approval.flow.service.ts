import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { ApprovalFlow } from "../models/approval.flow.model";

@Injectable({
    providedIn: 'root',
})
export class ApprovalFlowService {
    private service: string = `${environment.serviceQontrolsEngine}approvalFlow`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    list(parameters: HttpParams, _snackbar: MatSnackBar): Promise<ApiResponse<ApprovalFlow>> {
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

    listWithUserId(parameters: HttpParams, _snackbar: MatSnackBar): Promise<ApiResponse<ApprovalFlow>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/list`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackbar);
                    }
                })
        });
    }

    listInbox(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ApprovalFlow>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/inbox`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    add(approvalFlow: ApprovalFlow, _snackBar: MatSnackBar): Promise<ApiResponse<ApprovalFlow>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, approvalFlow).
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
