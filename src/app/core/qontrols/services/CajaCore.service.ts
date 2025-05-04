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
import {TipoIECajaDto} from "../models/tipoIECajaDto";
import {MovimientoCaja} from "../models/MovimientoCaja";
import {PaginateCajaCoreDto} from "../models/PaginateCajaCoreDto";
import {CierreCajaDto} from "../models/CierreCajaDto";


@Injectable({
    providedIn: 'root',
})
export class CajaCoreService {
    private service: string = `${environment.apiEngine}Caja`;
    private serviceParametrosGenerales: string = `${environment.apiEngine}ParametrosGenerales`;
    private serviceTipoIECaja: string = `${environment.apiEngine}TipoIECaja`;


    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}





    getTipo(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoIECajaDto[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.serviceTipoIECaja}/filter?`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getById(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<MovimientoCaja>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/getById?`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    getDetailById(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<CierreCajaDto>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/getDetailById`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }  listPaginateCajaCore(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<PaginateCajaCoreDto>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/PaginateCajaCore`, {params: parameters }).
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
    register(project: MovimientoCaja, _snackBar: MatSnackBar): Promise<ApiResponse<Producto>> {
        return new Promise((resolve) => {
            if (project.fecha_registro instanceof Date) {
                const fecha = project.fecha_registro;
                project.fecha_registroString =
                    fecha.getFullYear() + '-' +
                    String(fecha.getMonth() + 1).padStart(2, '0') + '-' +
                    String(fecha.getDate()).padStart(2, '0') + 'T' +
                    String(fecha.getHours()).padStart(2, '0') + ':' +
                    String(fecha.getMinutes()).padStart(2, '0') + ':' +
                    String(fecha.getSeconds()).padStart(2, '0');
            }
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, project).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    cerrarCaja(project: CierreCajaDto, _snackBar: MatSnackBar): Promise<ApiResponse<Producto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/cerrarCaja`, project).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    edit(project: MovimientoCaja, _snackBar: MatSnackBar): Promise<ApiResponse<MovimientoCaja>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/update`, project).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    delete(project: MovimientoCaja, _snackBar: MatSnackBar): Promise<ApiResponse<MovimientoCaja>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/delete`, project).
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
            this.getSubscription = this._httpClient.get<any>(`${this.service}/filter`, {params: parameters }).
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
            this.getSubscription = this._httpClient.get<any>(`${this.service}/list`, {params: parameters }).
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
            this.getSubscription = this._httpClient.get<any>(`${this.service}/filter`, {params: parameters }).
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
            this.getSubscription = this._httpClient.get<any>(`${this.service}/list`, {params: parameters }).
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
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, categoria).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);

                }
            })
        });
    }



    update(project: Project, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.put<any>(`${this.service}`, project).
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
