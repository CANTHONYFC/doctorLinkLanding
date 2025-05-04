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
import {EmpleadoPaginateDto} from "../models/EmpleadoPaginateDto";

@Injectable({
    providedIn: 'root',
})
export class EmpleadoService {
    private service: string = `${environment.apiEngine}Empleado`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) {}

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Empleado>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/list`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    update(data: EmpleadoDto, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Empleado>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/update`, data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    filterEmpleadoPaginateAsync(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EmpleadoPaginateDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/FilterEmpleadoPaginateAsync`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

}
