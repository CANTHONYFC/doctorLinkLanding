import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { Role } from "app/models/administration/Role";
import {openSnackBar, openSnackBarError} from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import {catchError, Observable, Subscription, tap, throwError} from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { Project } from "../models/project.model";
import {MenuRolListDto} from "../models/MenuRolList.Dto";
import {UserDto} from "../../../models/administration/UserDto";
import { PersonaDto } from "app/models/administration/PersonaDto";
import { PersonUserDto } from "app/models/administration/PersonUserDto";
import {WhattsapClienteDto} from "../../../models/Whattsap/WhattsapClienteDto";
import {WhattsapCliente} from "../../../models/Whattsap/WhattsapCliente";
import {WhattsapChat} from "../../../models/Whattsap/WhattsapChat";

@Injectable({
    providedIn: 'root',
})
export class WhattsapService {
    private service: string = `${environment.apiEngine}Whattsap`;

    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

    filterClientes(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<WhattsapClienteDto>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/filterClientes`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }
    limpiarContadorNotView(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<WhattsapClienteDto>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/limpiarContadorNotView`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getChatById(params: HttpParams, snackBar: MatSnackBar): Observable<ApiResponse<WhattsapCliente>> {
        return this._httpClient.get<ApiResponse<WhattsapCliente>>(`${this.service}/getChatById`, { params }).pipe(
            tap(response => {
                if (!response || !response.data) {
                    snackBar.open('No se encontró el chat', 'Cerrar', { duration: 3000 });
                }
            }),
            catchError(error => {
                snackBar.open('Error al obtener el chat', 'Cerrar', { duration: 3000 });
                return throwError(error);
            })
        );
    }

    // listUser(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<UserDto>> {
    //
    //     return new Promise((resolve) => {
    //         this.getSubscription = this._httpClient.get<any>(`${this.service2}/list`, {params: parameters }).
    //         subscribe({
    //             next: (data) => { resolve(data) },
    //             error: () => {
    //                 openSnackBarError(_snackBar);
    //             }
    //         })
    //     });
    // }
    //
    //
    sendMessageWhattsap(whattsapClienteDto: WhattsapCliente, _snackBar: MatSnackBar): Promise<ApiResponse<WhattsapClienteDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/sendMessageWhattsap`, whattsapClienteDto).
            subscribe({
                next: (data) => {
                    // openSnackBar(_snackBar,  'Usuario Registrado Existosamente', "SUCCESS");
                    resolve(data) },
                error: (err) => {
                    //openSnackBarError(_snackBar);
                    reject(err);
                }
            })
        });
    }
    //
    // updatePersonUser(project: PersonUserDto, _snackBar: MatSnackBar): Promise<ApiResponse<PersonUserDto>> {
    //     return new Promise((resolve, reject) => {
    //         this.getSubscription = this._httpClient.post<any>(`${this.service2}/update`, project).
    //         subscribe({
    //             next: (data) => {
    //                 /*openSnackBar(_snackBar,  'Usuario Editado Existosamente', "SUCCESS");*/
    //                 resolve(data) },
    //             error: (err) => {
    //                 //openSnackBarError(_snackBar);
    //                 reject(err);
    //             }
    //         })
    //     });
    // }
    //
    // getPersonUserList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<PersonUserDto>> {
    //
    //     return new Promise((resolve) => {
    //         this.getSubscription = this._httpClient.get<any>(`${this.service2}/show`, {params: parameters }).
    //         subscribe({
    //             next: (data) => { resolve(data) },
    //             error: () => {
    //                 openSnackBarError(_snackBar);
    //             }
    //         })
    //     });
    // }
    //
    // getMenuList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<MenuRolListDto[]>> {
    //
    //     return new Promise((resolve) => {
    //         this.getSubscription = this._httpClient.get<any>(`${this.service}/MenuList`, {params: parameters }).
    //         subscribe({
    //             next: (data) => { resolve(data) },
    //             error: () => {
    //                 openSnackBarError(_snackBar);
    //             }
    //         })
    //     });
    // }
    //
    // add(project: Project, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
    //     return new Promise((resolve) => {
    //         this.getSubscription = this._httpClient.post<any>(`${this.service}`, project).
    //         subscribe({
    //             next: (data) => { resolve(data) },
    //             error: () => {
    //                 openSnackBarError(_snackBar);
    //             }
    //         })
    //     });
    // }
    //
    // update(project: Project, _snackBar: MatSnackBar): Promise<ApiResponse<Project>> {
    //     return new Promise((resolve) => {
    //         this.getSubscription = this._httpClient.put<any>(`${this.service}`, project).
    //         subscribe({
    //             next: (data) => { resolve(data) },
    //             error: () => {
    //                 openSnackBarError(_snackBar);
    //             }
    //         })
    //     });
    // }

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
