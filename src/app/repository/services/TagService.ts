import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import {ApiResponse} from "../../models/interface/ApiResponse";
import { openSnackBarError } from "app/shared/util/operations/operations";
import {EtiquetaDto} from "../../models/administration/EtiquetaDto";

@Injectable({
    providedIn: 'root',
})
export class TagService {
    //http://localhost:5074/api/Etiqueta/filter?sorting=1&queryParam=1
    private service: string = `${environment.apiEngine}Etiqueta`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    getTags(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EtiquetaDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/filter`, {params: parameters}).
            subscribe({
                next: (data) => { resolve(data); },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            });
        });
    }

    addTag(_etiqueta: EtiquetaDto, _snackBar: MatSnackBar): Promise<ApiResponse<EtiquetaDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, _etiqueta)
                .subscribe({
                    next: (data) => {
                        resolve(data);
                    },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                });
        });
    }

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
