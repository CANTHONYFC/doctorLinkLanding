import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";

import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { Project } from "../models/project.model";
import { Empleado } from "../models/Empleado.model";
import { EmpleadoDto } from "../models/EmpleadoDto";
import { EtiquetaDto } from "../models/EtiquetaDto";

@Injectable({
    providedIn: 'root',
})
export class EtiquetaService {
    private service: string = `${environment.apiEngine}Etiqueta`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) {}
    

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EtiquetaDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/filter`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    update(data: EtiquetaDto, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Empleado>> {
        let m = data.id_etiqueta ? 'update' :'create';
        data.lugarUso = EtiquetaDto.adapterLugarUso(data);
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/${m}`, data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    updatestatus(data: EtiquetaDto, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Empleado>> {
        let m = 'update-status';
        data.lugarUso = EtiquetaDto.adapterLugarUso(data);
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/${m}`, data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
}