import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {openSnackBarError} from "app/shared/util/operations/operations";
import {environment} from "environments/environment";
import {Subscription} from "rxjs";
import {ApiResponse} from "../interface/response/api.response.entity";
import {Project} from "../models/project.model";

import {ParametrosGenerales} from "../models/ParametrosGenerales";
import {List} from "lodash";
import {Producto} from "../models/Producto ";
import {OrdenCompra} from "../models/OrdenCompra";
import {PaginateOrdenCompra} from "../models/PaginateOrdenCompra";
import {PaginateOrdenCompraDetalle} from "../models/PaginateOrdenCompraDetalle";


@Injectable({
    providedIn: 'root',
})
export class OrdenCompraService {
    private service: string = `${environment.apiEngine}Orden_Compra`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }


    getTipoProductosList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ParametrosGenerales[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/list?category=TIPOPROD`, {params: parameters}).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    ordenesCompraPaginate(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<List<PaginateOrdenCompra>>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/ordenesCompraPaginate`, {params: parameters}).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    ordenesCompraDetallePaginate(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<List<PaginateOrdenCompraDetalle>>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/ordenesCompraDetallePaginate`, {params: parameters}).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getById(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<OrdenCompra>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/getById`, {params: parameters}).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    delete(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<OrdenCompra>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/delete`, {params: parameters}).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    add(project: Project, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, project).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    register(project: OrdenCompra, _snackBar: MatSnackBar): Promise<ApiResponse<Producto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, project).subscribe({
                next: (data) => {
                    resolve(data)
                },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    edit(project: OrdenCompra, _snackBar: MatSnackBar): Promise<ApiResponse<Producto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/update`, project).subscribe({
                next: (data) => {
                    resolve(data)
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
}
