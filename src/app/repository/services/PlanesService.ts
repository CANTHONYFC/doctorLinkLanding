import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {environment} from "environments/environment";
import {Subscription} from "rxjs";

import {openSnackBarError} from "app/shared/util/operations/operations";
import {PlanesSuscriptions} from "../../models/administration/PlanesSuscriptions";
import {List} from "lodash";
import {ApiResponse} from "app/models/interface/api.response.entity";

@Injectable({
    providedIn: 'root',
})
export class PlanesService {
    private service: string = `${environment.apiEngine}PlanesLanding`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }


    listPlanes(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<List<PlanesSuscriptions>>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/listPlanes`, {
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
