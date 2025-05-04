import {Inject, Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Subscription} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {Response} from "../../shared/entity/response";
import {ProductDiscountModel} from "../models/product-discount.model";
import {openSnackBarError} from "../../../shared/util/operations/operations";
import {ApiResponse} from "../interface/response/api.response";

@Injectable({
    providedIn: 'root'
})
export class SaleForceDiscountService{

    private service: string = `${environment.serviceDiscountTemp}sale-force-discount`;
    private getSubscription: Subscription;

    constructor(
        private _httpClient: HttpClient
    ) {

    }


    get(parameters:HttpParams, _snackBar:MatSnackBar):Promise<Response<ProductDiscountModel>>{
        return new Promise((resolve)=> {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, {params: parameters}).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getById(id:string, _snackBar:MatSnackBar):Promise<ApiResponse<ProductDiscountModel>>{
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

    update(productDiscount:ProductDiscountModel, _snackBar:MatSnackBar):Promise<ApiResponse<ProductDiscountModel>>{
        return new Promise((resolve)=> {
            this.getSubscription = this._httpClient.patch<any>(`${this.service}`,productDiscount).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    delete(id:string, _snackBar:MatSnackBar):Promise<ApiResponse<ProductDiscountModel>>{
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





    add(_productDiscount:ProductDiscountModel, _snackBar:MatSnackBar):Promise<ApiResponse<ProductDiscountModel>>{
        return new Promise((resolve,reject)=>{
            this.getSubscription = this._httpClient.post<any>(`${this.service}`,_productDiscount).
            subscribe({
                next:(data)=>{resolve(data)},
                error:()=>{openSnackBarError(_snackBar)}
            })
        })
    }
}
