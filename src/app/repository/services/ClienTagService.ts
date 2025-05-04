import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import {ApiResponse} from "../../models/interface/ApiResponse";
import { openSnackBarError } from "app/shared/util/operations/operations";
import {EtiquetaClientDto} from "../../models/administration/EtiquetaClientDto";

@Injectable({
    providedIn: 'root',
})
export class ClienTagService {
    private service: string = `${environment.apiEngine}EtiquetaCliente`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}


    addClientTag(_etiquetaCliente: EtiquetaClientDto, _snackBar: MatSnackBar): Promise<ApiResponse<EtiquetaClientDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, _etiquetaCliente)
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

    updateClientTag(_etiquetaCliente: EtiquetaClientDto, _snackBar: MatSnackBar): Promise<ApiResponse<EtiquetaClientDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/update-status`, _etiquetaCliente)
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

    addUpdateClientTag(_etiquetaCliente: EtiquetaClientDto[], _snackBar: MatSnackBar): Promise<ApiResponse<EtiquetaClientDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create-update`, _etiquetaCliente)
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
