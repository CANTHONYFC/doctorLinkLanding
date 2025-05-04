import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {openSnackBarError} from "app/shared/util/operations/operations";
import {environment} from "environments/environment";
import {Subscription} from "rxjs";
import {Response} from "../../shared/entity/response";
import {Company} from "../models/company.model";
import {SyncTask} from "../models/sync-task.model";

@Injectable({
    providedIn: 'root',
})
export class SyncTaskService {
    private service: string = `${environment.serviceGeneral}admoperation/sync-task`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<Response<SyncTask>> {


        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<Response<Company>>(`${this.service}`, {params: parameters}).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    // openSnackBarError(_snackBar);
                }
            })
        });
    }

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
