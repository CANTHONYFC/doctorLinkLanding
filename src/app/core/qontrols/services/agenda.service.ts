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

@Injectable({
    providedIn: 'root',
})
export class AgendaService {
    private service: string = `${environment.apiEngine}Cliente`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) {}

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/calendar-filter`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    create(cita,parameters: HttpParams, _snackBar: MatSnackBar):Promise<ApiResponse<any>>{
        let endpoint = cita.cita.id_cita > 0 ? 'update' : 'create';
        let body = cita.cita.id_cita > 0 ? cita.cita : cita;
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${environment.serviceGeneral}Citas/${endpoint}`,body, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    changeStatus(cita,parameters: HttpParams, _snackBar: MatSnackBar):Promise<ApiResponse<any>>{
        let endpoint = 'status';
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${environment.serviceGeneral}Citas/${endpoint}`,cita, {params: parameters }).
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
}
