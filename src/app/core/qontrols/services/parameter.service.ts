import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ApiResponse } from '../interface/response/api.response.entity';
import { openSnackBarError } from 'app/shared/util/operations/operations';
import { ParameterEntity } from '../interface/parameter.interface';
import {ParametrosGenerales} from "../models/ParametrosGenerales";

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

    private service: string = `${environment.serviceSettingOperation}parameter`;
    private serviceParametrosGenerales: string = `${environment.apiEngine}ParametrosGenerales`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) { }

    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ParameterEntity>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    getParametrosList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ParametrosGenerales[]>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.serviceParametrosGenerales}/list`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    unsub(){
      this.getSubscription?.unsubscribe();
    }
}
