import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";

import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { ProcedimientoPlantilla } from "../models/ProcedimientoPlantilla";
import { HCProcedimiento } from "../models/HCProcedimiento";
import { NotificationService } from "app/modules/qontrols/shared/service/service-notification.service";

@Injectable({
    providedIn: 'root',
})
export class PlantillaService {
    private service: string = `${environment.apiEngine}Procedimiento_plantilla`;
    private service2: string = `${environment.apiEngine}Hc_procedimiento`;
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

    create(data: ProcedimientoPlantilla, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    crearProcedimiento(data: HCProcedimiento, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service2}/create`, data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    NotificationService.RemoveLoader();
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    /*filterEmpleadoPaginateAsync(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EmpleadoPaginateDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/FilterEmpleadoPaginateAsync`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }*/

}
