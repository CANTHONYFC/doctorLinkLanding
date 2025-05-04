import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Subscription} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {ApiResponse} from "../interface/response/api.response";
import {ProductDiscountModel} from "../models/product-discount.model";
import {data} from "autoprefixer";
import {openSnackBarError} from "../../../shared/util/operations/operations";
import {Response} from "../../shared/entity/response";
import {SaleForceDiscountModel} from "../models/sale-force-discount.model";

@Injectable({
  providedIn: 'root'
})
export class ProductDiscountService {

    //private service: string = `${environment.serviceDiscountTemp}sale-force-discount`;
    private service: string = 'http://localhost:8080/discounts-temp/sale-force-discount';
    private getSubscription: Subscription;


    constructor(
        private _httpClient: HttpClient
    ) {

    }

    getProductDiscount(parameters:HttpParams, _snackBar:MatSnackBar):Promise<Response<SaleForceDiscountModel>>{
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

    getProductDiscountById(id:string, _snackBar:MatSnackBar):Promise<ApiResponse<SaleForceDiscountModel>>{
        return new Promise((resolve)=> {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/${id}`).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    updateProductDiscount(productDiscount:SaleForceDiscountModel, _snackBar:MatSnackBar):Promise<ApiResponse<SaleForceDiscountModel>>{
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

    deleteProductDiscount(id:string, _snackBar:MatSnackBar):Promise<ApiResponse<SaleForceDiscountModel>>{
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





    addProductDiscount(_productDiscount:SaleForceDiscountModel, _snackBar:MatSnackBar):Promise<ApiResponse<SaleForceDiscountModel>>{
        return new Promise((resolve,reject)=>{
            this.getSubscription = this._httpClient.post<any>(`${this.service}`,_productDiscount).
            subscribe({
                next:(data)=>{resolve(data)},
                error:()=>{openSnackBarError(_snackBar)}
            })
        })
    }
}
