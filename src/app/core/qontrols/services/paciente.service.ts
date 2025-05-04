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
import { PersonUserDto } from "app/models/administration/PersonUserDto";
import { PacienteCreate } from "../models/PacienteCreateModels";

@Injectable({
    providedIn: 'root',
})
export class PacienteService {
    private service: string = `${environment.apiEngine}Cliente`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) {}


    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
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

    FilterClientePaginateAsync(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/FilterClientePaginateAsync`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    update(data: PacienteCreate, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<PacienteCreate>> {
        let m = 'create';
        let raw = JSON.parse(JSON.stringify(data));
        if(!data.parentesco?.parentesco?.falg_apoderado) raw.parentesco = null;//Se anula el parentesco
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/${m}`, raw, {params: parameters }).
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
