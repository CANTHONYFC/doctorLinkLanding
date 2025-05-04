import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {Subscription} from "rxjs";
import {openSnackBarError} from "app/shared/util/operations/operations";
import {ApiResponse} from "../../models/interface/ApiResponse";
import {MostrarDatosDto} from "../../models/administration/MostrarDatosDto";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ClientDataService {
    private service: string = `${environment.apiEngine}Cliente`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }

    getClientData(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<MostrarDatosDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/personal-data`, {
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
