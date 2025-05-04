import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { Role } from "app/models/administration/Role";
import { openSnackBar, openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { Project } from "../models/project.model";
import { TipoIECajaDto } from "../models/tipoIECajaDto";
import { TipoMedioPagoDto } from "../models/tipoMedioPagoDto";
import { EmpresaDto } from "../models/EmpresaDto";
import { ConfigCajaDto } from "../models/ConfigCajaDto";
import { ParametrosGenerales } from "../models/ParametrosGenerales";

@Injectable({
    providedIn: 'root',
})
export class CajaService {
    private service: string = `${environment.serviceSecEngine}permission`;
    private service2: string = `${environment.apiEngine}TipoIECaja`;
    private service3: string = `${environment.apiEngine}ParametrosGenerales`;
    private service4: string = `${environment.apiEngine}TipoMedioPago`;
    private service5: string = `${environment.apiEngine}Empresa`;
    private service6: string = `${environment.apiEngine}ConfigCaja`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}

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

    getTipoIngresoList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ParametrosGenerales[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=TIPOINGR`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getTipoPagoList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ParametrosGenerales[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=TIPOPAGO`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getTipoIEList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ParametrosGenerales[]>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=TIPOIECAJA`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getMPagoList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ParametrosGenerales[]>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=TIPOIECAJA`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }


    getTipoIECajaByID(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoIECajaDto>> {
    
            return new Promise((resolve) => {
                this.getSubscription = this._httpClient.get<any>(`${this.service2}/ById`, {params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
            });
    }

    getMedioPagoByID(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoMedioPagoDto>> {
    
            return new Promise((resolve) => {
                this.getSubscription = this._httpClient.get<any>(`${this.service4}/ById`, {params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
            });
    }

    deleteMedioPago(project: TipoMedioPagoDto, _snackBar: MatSnackBar): Promise<ApiResponse<TipoMedioPagoDto>> {
                return new Promise((resolve) => {
                    this.getSubscription = this._httpClient.post<any>(`${this.service4}/delete`,project).
                    subscribe({
                        next: (data) => {
                            resolve(data) }
                    })
                });
    }

    deleteTipoIECaja(project: TipoIECajaDto, _snackBar: MatSnackBar): Promise<ApiResponse<TipoIECajaDto>> {
                return new Promise((resolve) => {
                    this.getSubscription = this._httpClient.post<any>(`${this.service2}/delete`,project).
                    subscribe({
                        next: (data) => {
                            resolve(data) }
                    })
                });
    }

    actualizarFlagDoctor(project: ConfigCajaDto, _snackBar: MatSnackBar): Promise<ApiResponse<ConfigCajaDto>> {
                return new Promise((resolve) => {
                    this.getSubscription = this._httpClient.post<any>(`${this.service6}/update-config-caja-by-uneg`,project).
                    subscribe({
                        next: (data) => {
                            resolve(data) },
                        error: () => {
                            openSnackBarError(_snackBar);
                        }
                    })
                });
    }


    getEmpresaByIdUneg(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EmpresaDto>> {
    
        return new Promise((resolve) => {
                this.getSubscription = this._httpClient.get<any>(`${this.service5}/empresa-by-uneg`, {params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                }
            })
        });
    }

    getConfigCajaIdUneg(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ConfigCajaDto>> {
    
        return new Promise((resolve) => {
                this.getSubscription = this._httpClient.get<any>(`${this.service6}/configCaja-by-uneg`, {params: parameters }).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                }
            })
        });
    }

    listCajaIngresosPaginate(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoIECajaDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service2}/filter`, { params: parameters })
                .subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                });
        });
    }

    listMedioPagoPaginate(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoMedioPagoDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service4}/filter`, { params: parameters })
                .subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                });
        });
    }

    getMedioPagoByIDEditar

    editMedioPago(project: TipoMedioPagoDto, _snackBar: MatSnackBar): Promise<ApiResponse<TipoMedioPagoDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service4}/update`, project).
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


    registerMedioPagoNew(project: TipoMedioPagoDto, _snackBar: MatSnackBar): Promise<ApiResponse<TipoMedioPagoDto>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service4}/create`, project).
            subscribe({
                next: (data) => { resolve(data) },

            })
        });
}

    editTipoIECaja(project: TipoIECajaDto): Promise<ApiResponse<TipoIECajaDto>> {
            return new Promise((resolve) => {
                this.getSubscription = this._httpClient.post<any>(`${this.service2}/update`, project).
                subscribe({
                    next: (data) => {
                        resolve(data) },

                })
            });
        }

    registerIECajaNew(project: TipoIECajaDto, _snackBar: MatSnackBar): Promise<ApiResponse<TipoIECajaDto>> {
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
