import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { environment } from "environments/environment";
import { Subscription } from "rxjs";
import {ApiResponse} from "../../models/interface/ApiResponse";
import { openSnackBarError } from "app/shared/util/operations/operations";
import {NotaDto} from "../../models/administration/NotaDto";
import {AlergiaDto} from "../../models/administration/AlergiaDto";
import {DatosFiscalesDto} from "../../models/administration/DatosFiscalesDto";

@Injectable({
    providedIn: 'root',
})
export class DatosFiscalesService {
    private service: string = `${environment.apiEngine}DatosFiscales`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {}


    agregarDatosFiscales(_datosFiscales: DatosFiscalesDto, _snackBar: MatSnackBar): Promise<ApiResponse<DatosFiscalesDto>> {
        return new Promise((resolve, reject) => {
            this.getSubscription = this._httpClient.post<any>(`${this.service}/create`, _datosFiscales)
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
