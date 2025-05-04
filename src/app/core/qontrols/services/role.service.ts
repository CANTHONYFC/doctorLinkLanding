import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { Role } from "app/models/administration/Role";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import { ApiResponse } from "../interface/response/api.response.entity";
import { Project } from "../models/project.model";
import {MenuRolListDto} from "../models/MenuRolList.Dto";
import {TipoUser} from "../models/TipoUser.model";
import { TipoGenero } from "../models/TipoGenero";
import { ColegiaturaList } from "../models/ColegiaturaList";
import { SedeList } from "../models/SedeList";
import { TipoCategoria } from "../models/tipocategoria";
import { tipoSubCategoria } from "../models/tipoSubCategoria";
import { EspecialidadList } from "../models/EspecialidadList";
import { TipoDocumento } from "../models/TipoDocumentoList";
import { ParametrosGenerales } from "../models/ParametrosGenerales";
import { Especialidad } from "../models/especialidad.model";

@Injectable({
    providedIn: 'root',
})
export class RoleService {
    private service: string = `${environment.serviceSecEngine}permission`;
    private service2: string = `${environment.apiEngine}TipoUser`;
    private service3: string = `${environment.apiEngine}ParametrosGenerales`;
    private service4: string = `${environment.apiEngine}Sucursal`;
    private service5: string = `${environment.apiEngine}Categoria`;
    private service6: string = `${environment.apiEngine}Subcategoria`;
    private service7: string = `${environment.apiEngine}Especialidad`;

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

    getMenuList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<MenuRolListDto[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}/MenuList`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getEspecialidadList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<EspecialidadList[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service7}/list-by-uneg`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    saveEspecialidad(especialidad:Especialidad ,parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        let ep = especialidad.id_especialidad > 0 ? 'update' : 'create'
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service7}/${ep}`,especialidad, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    changeStatusEspecialidad(especialidad:Especialidad ,parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service7}/status`,especialidad, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getTipoUserList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoUser[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service2}/list`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getGeneroList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoGenero[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=GEN`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getTipoDocumentoList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoDocumento[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=TIPODOC`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getColegiaturaList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ColegiaturaList[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=COLEG`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getTipoEmpresaList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<ColegiaturaList[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=TIPOEMPRE`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getAgendaEstadosList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=AGENDAESTADO`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getAgendaDiasList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service3}/list?category=AGENDADIAS`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getCategoriaList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<TipoCategoria[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service5}/listar`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    getSubCategoriaList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<tipoSubCategoria[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service6}/listar`, {params: parameters }).
            subscribe({
                next: (data) => { resolve(data) },
                error: () => {
                    openSnackBarError(_snackBar);
                }
            })
        });
    }

    
    getSedeList(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<SedeList[]>> {

        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service4}/ByUser/list`, {params: parameters }).
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
