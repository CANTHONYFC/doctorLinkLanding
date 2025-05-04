import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response";
import { Project } from "../models/project.model";

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private service: string = `${environment.serviceSettingOperation}project`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    list(parameters: HttpParams, company: string, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
        let headers: HttpHeaders = new HttpHeaders().set('company', company);
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, {headers, params: parameters }).
                subscribe({
                    next: (data) => {
                        resolve(data)
                    },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    add(project: Project, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, project).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        });
    }

    update(project: Project, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}`, project).
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
