import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {ApiResponse} from "../interface/response/api.response";
import {ItemRanges, SaleForceDiscountDetailModel} from "../models/sale-force-discount.model";
import {openSnackBarError} from "../../../shared/util/operations/operations";

@Injectable({
    providedIn: 'root'
})
export class SaleForceRangesService{

    //private service: string = `${environment.serviceDiscountTemp}sale-force-ranges`;
    private service: string = 'http://localhost:8080/discounts-temp/sale-force-ranges';
    private getSubscription: Subscription;

    constructor(
        private _httpClient: HttpClient
    ) {

    }

    delete(id:number, _snackBar:MatSnackBar):Promise<ApiResponse<ItemRanges>>{
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
