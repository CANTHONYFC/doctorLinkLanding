import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { Role } from "app/models/administration/Role";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { Project } from "../models/project.model";
import {MenuRolListDto} from "../models/MenuRolList.Dto";
import {TipoUser} from "../models/TipoUser.model";
import { TipoGenero } from "../models/TipoGenero";
import { ColegiaturaList } from "../models/ColegiaturaList";
import { SedeList } from "../models/SedeList";

@Injectable({
    providedIn: 'root',
})
export class FileService {
    private service: string = `${environment.apiEngine}SubidaArchivoControlador`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) {}


    upload(data: FormData, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Role>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/subir`,data, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
}