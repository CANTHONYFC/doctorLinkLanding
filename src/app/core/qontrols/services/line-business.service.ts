import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Subscription} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {ApiResponse} from "../interface/response/api.response";
import {LineBusiness} from "../models/line-business.model";
import {data} from "autoprefixer";
import {openSnackBarError} from "../../../shared/util/operations/operations";

@Injectable({
  providedIn: 'root'
})
export class LineBusinessService {

    private service: string = `${environment.serviceAdminOperation}line-business`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) { }

    search(parameters:HttpParams, _snackBar:MatSnackBar):Promise<ApiResponse<LineBusiness>>{
        return new Promise((resolve)=>{
            this.getSubscription = this._httpClient.get<any>(`${this.service}`,{params:parameters}).
                subscribe({
                    next:(data) => {resolve(data)},
                    error:()=>{openSnackBarError(_snackBar)}
            })
        });
    }


}
