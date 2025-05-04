import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import {ApiResponse} from "../../models/interface/ApiResponse";
import { openSnackBarError } from "app/shared/util/operations/operations";
import {NotaDto} from "../../models/administration/NotaDto";
import {AlergiaDto} from "../../models/administration/AlergiaDto";

@Injectable({
    providedIn: 'root',
})
export class AlergiaService {
    private service: string = `${environment.apiEngine}AlergiaCliente`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}


    addAllergy(_alergia: AlergiaDto, _snackBar: MatSnackBar): Promise<ApiResponse<NotaDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, _alergia)
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

    updateAllergy(_alergia: AlergiaDto, _snackBar: MatSnackBar): Promise<ApiResponse<NotaDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/update`,_alergia)
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
