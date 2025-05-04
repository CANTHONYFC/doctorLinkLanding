import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { Role } from "app/models/administration/Role";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { Project } from "../models/project.model";

import { ParametrosGenerales } from "../models/ParametrosGenerales";
import {CategoriaProducto} from "../models/categoriaProducto";
import { List } from "lodash";
import {Producto} from "../models/Producto ";


@Injectable({
    providedIn: 'root',
})
export class ProductoService {
    private service: string = `${environment.serviceSecEngine}permission`;
    private service3: string = `${environment.apiEngine}ParametrosGenerales`;
    private serviceCategoriaProducto: string = `${environment.apiEngine}CategoriaProducto`;
    private serviceAlmacen: string = `${environment.apiEngine}Almacen`;
    private servicePresentacion: string = `${environment.apiEngine}Presentacion`;
    private serviceProducto: string = `${environment.apiEngine}Producto`;


    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}





    getTipoProductosList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ParametrosGenerales[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=TIPOPROD`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    list(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Role>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/rolesPaginate`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    add(project: Project, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}`, project).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    registerProduct(project: Producto, _snackBar: MatSnackBar): Promise<ApiResponse<Producto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.serviceProducto}/create`, project).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    editProduct(project: Producto, _snackBar: MatSnackBar): Promise<ApiResponse<Producto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.serviceProducto}/update`, project).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    listCategoria(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.serviceCategoriaProducto}/filter`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    filterById(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<Producto>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.serviceProducto}/filterById`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    listAlmacen(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.serviceAlmacen}/list`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    listarProductos(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.serviceProducto}/filter`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    listPresentacion(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.servicePresentacion}/list`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    addCategoria(categoria: CategoriaProducto, _snackBar: MatSnackBar): Promise<ApiResponse<CategoriaProducto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.serviceCategoriaProducto}/create`, categoria).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);

                }
            })
        });
    }



    updateStatus(project: Producto, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.serviceProducto}/update-status`, project).
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
