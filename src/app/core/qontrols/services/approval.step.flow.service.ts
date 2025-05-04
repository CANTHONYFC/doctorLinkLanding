import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { ApprovalStepFlow } from "../models/approval.step.flow.model";

@Injectable({
    providedIn: 'root',
})
export class ApprovalStepFlowService {
    private service: string = `${environment.serviceQontrolsEngine}approvalFlowStep`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    add(approvalStepFlow: ApprovalStepFlow, _snackBar: MatSnackBar): Promise<ApiResponse<ApprovalStepFlow>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, approvalStepFlow).
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
