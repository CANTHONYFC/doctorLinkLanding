import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import {ApiResponse} from "../../models/interface/ApiResponse";
import { openSnackBarError } from "app/shared/util/operations/operations";
import {EtiquetaDto} from "../../models/administration/EtiquetaDto";
import {NotaDto} from "../../models/administration/NotaDto";

@Injectable({
    providedIn: 'root',
})
export class NoteService {
    private service: string = `${environment.apiEngine}NotaCliente`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}


    addNote(_etiqueta: EtiquetaDto, _snackBar: MatSnackBar): Promise<ApiResponse<NotaDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, _etiqueta)
                .subscribe({
                    next: (data) => {
                        resolve(data);
                    },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                });
        });
    }

    updateNote(_etiqueta: EtiquetaDto, _snackBar: MatSnackBar): Promise<ApiResponse<NotaDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/update`, _etiqueta)
                .subscribe({
                    next: (data) => {
                        resolve(data);
                    },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                });
        });
    }

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
