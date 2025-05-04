import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { EmpresaDto } from "../models/EmpresaDto";

@Injectable({
    providedIn: 'root',
})
export class EmpresaService {
    private service: string = `${environment.apiEngine}Empresa`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    getEmpresaByID(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EmpresaDto>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/empresa-by-uneg`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    
    actualizarPerfil(project: EmpresaDto, _snackBar: MatSnackBar): Promise<ApiResponse<EmpresaDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/update-empresa-by-uneg`, project).
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
