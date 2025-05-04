import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, ReplaySubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { openSnackBarError } from 'app/shared/util/operations/operations';
import { ApiResponse } from '../interface/response/api.response';
import { Activity } from '../interface/activity.model';
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";

@Injectable({
    providedIn: 'root',
})
export class ActivityService {
    private service: string = `${environment.serviceCoreOperation}activity`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) { }

    getAll(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Activity>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data)},
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }
    getById(activityCode: string, parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Activity>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/${activityCode}`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data)},
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }
    add(activity: Activity, _snackBar: MatSnackBar):  Promise<ApiResponse<Activity>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, activity).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar,"Error Activity")
                    }
                })
        });
    }

}
