import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { openSnackBarError } from 'app/shared/util/operations/operations';
import { ApiResponse} from "../interface/response/api.response";
import { BusinessPartner } from '../models/business.partner.model';

@Injectable({
    providedIn: 'root',
})
export class BusinessPartnerService {
    private service: string = `${environment.serviceCrmOperation}business-partner`;
    private getSubscription: Subscription;
    constructor(private _httpClient: HttpClient) { }

    search(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<BusinessPartner>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, {params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    } 
    add(businessPartner: BusinessPartner, _snackBar: MatSnackBar):  Promise<ApiResponse<BusinessPartner>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, businessPartner).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }
    update(businessPartner: BusinessPartner, _snackBar: MatSnackBar): Promise<ApiResponse<BusinessPartner>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}`, businessPartner).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => { openSnackBarError(_snackBar) }
                })
        });
    }

    delete(id: string, _snackBar: MatSnackBar): Promise<ApiResponse<BusinessPartner>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.delete<any>(`${this.service}/`+id).
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
