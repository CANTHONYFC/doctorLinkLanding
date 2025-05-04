import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {Subscription} from "rxjs";
import {openSnackBarError} from "app/shared/util/operations/operations";
import {ApiResponse} from "../../models/interface/ApiResponse";
import {environment} from "../../../environments/environment";
import {DatosFamiliaresDto} from "../../models/administration/DatosFamiliaresDto";

@Injectable({
    providedIn: 'root',
})
export class DatosFamiliaresService {
    private service: string = `${environment.apiEngine}Cliente`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }

    getFamilyData(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<DatosFamiliaresDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/family-data`, {
                params: parameters
            }).subscribe({
                next: (data) => {
                    resolve(data);
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
