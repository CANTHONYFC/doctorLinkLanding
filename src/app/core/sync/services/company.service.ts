import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {openSnackBarError} from "app/shared/util/operations/operations";
import {environment} from "environments/environment";
import {Subscription} from "rxjs";
import {Response} from "../../shared/entity/response";
import {Company} from "../models/company.model";

@Injectable({
    providedIn: 'root',
})
export class CompanyService {
    private service: string = `${environment.serviceAdminOperation}company`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<Response<Company>> {


        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<Response<Company>>(`${this.service}`, {params: parameters}).subscribe({
                next: (data) => {
                    resolve(data)
                },
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
