import {HttpClient, HttpParams} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import {ApiResponse} from "../../models/interface/ApiResponse";
import { openSnackBarError } from "app/shared/util/operations/operations";
import {NotaDto} from "../../models/administration/NotaDto";
import {AlergiaDto} from "../../models/administration/AlergiaDto";
import {DatosFiscalesDto} from "../../models/administration/DatosFiscalesDto";

@Injectable({
    providedIn: 'root',
})
export class PersonaService {
    private service: string = `${environment.apiEngine}Persona`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}


    getPersonaPorDni(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/ByDNI`, {params: parameters }).
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
