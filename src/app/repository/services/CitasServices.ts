import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {Subscription} from "rxjs";
import {openSnackBarError} from "app/shared/util/operations/operations";
import {ApiResponse} from "../../models/interface/ApiResponse";
import {environment} from "../../../environments/environment";
import {DatosFamiliaresDto} from "../../models/administration/DatosFamiliaresDto";
import {HistorialCitasDto} from "../../models/administration/HistorialCitasDto";

@Injectable({
    providedIn: 'root',
})
export class CitasServices {
    private service: string = `${environment.serviceGeneral}Citas`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }

    getCitas(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<HistorialCitasDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/quotes`, {
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
