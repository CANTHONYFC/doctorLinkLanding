import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { openSnackBarError } from 'app/shared/util/operations/operations';
import { ApiResponse} from "../interface/response/api.response";
import { ModelItem} from "../models/model.item.model";
import {MatLegacySnackBar} from "@angular/material/legacy-snack-bar";

@Injectable({
    providedIn: 'root',
})
export class ModelItemService {
    private service: string = `${environment.serviceSettingOperation}model-item`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) { }

    search(parameters: HttpParams, _snackBar: MatLegacySnackBar): Promise<ApiResponse<ModelItem>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, { params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }

    unSub(){
        this.getSubscription?.unsubscribe();
    }

}
