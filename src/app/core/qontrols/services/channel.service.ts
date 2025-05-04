import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Subscription} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {ApiResponse} from "../interface/response/api.response";
import {BusinessChannelModel} from "../models/business-channel.model";
import {data} from "autoprefixer";
import {openSnackBarError} from "../../../shared/util/operations/operations";

@Injectable({
    providedIn:'root'
})
export class ChannelService{

    private service: string = `${environment.serviceSettingOperation}business-channel`;
    private getSubscription:Subscription;

    constructor(
        private _httpClient:HttpClient
    ) {
    }

    getChannel(parameters:HttpParams,_snackBar:MatSnackBar):Promise<ApiResponse<BusinessChannelModel>>{
        return new Promise((resolve)=>{
            this.getSubscription = this._httpClient.get<any>(`${this.service}`,{params:parameters}).
            subscribe({
                next:(data)=>{resolve(data)},
                error:()=>{openSnackBarError(_snackBar)}
            })
        })
    }


}
