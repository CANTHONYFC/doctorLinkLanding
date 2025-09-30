import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {environment} from "environments/environment";
import {Subscription} from "rxjs";

import {openSnackBarError} from "app/shared/util/operations/operations";
import {PlanesSuscriptions} from "../../models/administration/PlanesSuscriptions";
import {List} from "lodash";
import {ApiResponse} from "app/models/interface/api.response.entity";
import {RegisterPagoPlanLanding} from "../../models/administration/RegisterPagoPlanLanding";
import { NiubizSessionRequest } from "app/models/administration/NiubizDto";

@Injectable({
    providedIn: 'root',
})
export class PlanesService {
    private service: string = `${environment.apiEngine}PlanesLanding`;
    private service2: string = `${environment.apiEngine}Niubiz`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }


    listPlanes(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<List<PlanesSuscriptions>>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/listPlanes`, {
                params: parameters
            }).subscribe({
                next: (data) => {
                    resolve(data);
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    register(project: RegisterPagoPlanLanding, _snackBar: MatSnackBar): Promise<ApiResponse<RegisterPagoPlanLanding>> {
        return new Promise((resolve) => {

            this.getSubscription = this._httpClient.post<any>(`${this.service}/registerNewUserLanding`, project).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

 
    verifyExits(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Boolean>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/verifyExits`, {
                params: parameters
            }).subscribe({
                next: (data) => {
                    resolve(data);
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    unSub() {
        this.getSubscription?.unsubscribe();
    }

createNiubizSession(data: NiubizSessionRequest): Promise<any> {
  return new Promise((resolve, reject) => {
    this._httpClient.post<any>(`${this.service2}/session`, data)
      .subscribe({
        next: (response) => resolve(response),
        error: (err) => reject(err)
      });
  });
}
    
    registerNiubiz(registro: {
      transactionToken: string;
      purchaseNumber: string;
      amount: string;
      correo: string;
      password: string;
      planId: number;
    }): Promise<any> {
      return new Promise((resolve, reject) => {
        this._httpClient.post<any>(`${this.service2}/register-payment`, registro)
          .subscribe({
            next: (response) => resolve(response),
            error: (err) => reject(err)
          });
      });
    }
    
    verifyNiubizTransaction(purchaseNumber: string): Promise<any> {
      return new Promise((resolve, reject) => {
        this._httpClient.get<any>(`${this.service2}/verify/${purchaseNumber}`)
          .subscribe({
            next: (response) => resolve(response),
            error: (err) => reject(err)
          });
      });
    }

}
