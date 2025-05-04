import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBar, openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { ServicioDto } from "app/models/administration/ServicioDto";
import { TipoCategoria } from "../models/tipocategoria";
import { tipoSubCategoria } from "../models/tipoSubCategoria";

@Injectable({
    providedIn: 'root',
})
export class ServicioService {
    private service: string = `${environment.apiEngine}Servicio`;
    private service2: string = `${environment.apiEngine}Subcategoria`;
    private service3: string = `${environment.apiEngine}Categoria`;



    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    listServicioPaginate(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ServicioDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/filter`, { params: parameters })
                .subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                });
        });
    }



    registerServiceNew(project: ServicioDto, _snackBar: MatSnackBar): Promise<ApiResponse<ServicioDto>> {
            return new Promise((resolve) => {
                this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, project).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
            });
    }

    getServicioByID(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ServicioDto>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/ById`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    editService(project: ServicioDto, _snackBar: MatSnackBar): Promise<ApiResponse<ServicioDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/update`, project).
            subscribe({
                next: (data) => {
                    openSnackBar(_snackBar,  'Servicio Editado Existosamente', "SUCCESS");
                    resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    deleteService(project: ServicioDto, _snackBar: MatSnackBar): Promise<ApiResponse<ServicioDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/delete`,project).
            subscribe({
                next: (data) => {
                    openSnackBar(_snackBar,  'Servicio Eliminado Existosamente', "SUCCESS");
                    resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    registerSubCategoryNew(project: tipoSubCategoria, _snackBar: MatSnackBar): Promise<ApiResponse<tipoSubCategoria>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service2}/create`, project).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    registerCategoryNew(project: TipoCategoria, _snackBar: MatSnackBar): Promise<ApiResponse<TipoCategoria>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service3}/create`, project).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
}

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
