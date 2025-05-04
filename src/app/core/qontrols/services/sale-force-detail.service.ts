import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {ApiResponse} from "../interface/response/api.response";
import {openSnackBarError} from "../../../shared/util/operations/operations";
import {SaleForceDiscountDetailModel} from "../models/sale-force-discount.model";

@Injectable({
    providedIn: 'root'
})
export class SaleForceDetailService{

    //private service: string = `${environment.serviceDiscountTemp}sale-force-detail`;
    private service: string = 'http://localhost:8080/discounts-temp/sale-force-detail';
    private getSubscription: Subscription;

    constructor(
        private _httpClient: HttpClient
    ) {

    }

    delete(id:number, _snackBar:MatSnackBar):Promise<ApiResponse<SaleForceDiscountDetailModel>>{
        return new Promise((resolve)=> {
            this.getSubscription = this._httpClient.delete<any>(`${this.service}/${id}`).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
}
