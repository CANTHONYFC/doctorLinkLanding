import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {environment} from "environments/environment";
import {Subscription} from "rxjs";

import {openSnackBarError} from "app/shared/util/operations/operations";
import {ApiResponse} from "app/models/interface/api.response.entity";
import {RegisterPagoPlanLanding} from "../../models/administration/RegisterPagoPlanLanding";
import {GenericoTableSmtpDto} from "../../models/Mailing/GenericoTableSmtpDto";

@Injectable({
    providedIn: 'root'
})
export class MailingService {
    private service: string = `${environment.apiEngine}Mailing`;
    private getSubscription: Subscription;

    constructor(private _httpClient: HttpClient) {
    }


    sendSMTPGenericoTable(project: GenericoTableSmtpDto, _snackBar: MatSnackBar): Promise<ApiResponse<RegisterPagoPlanLanding>> {
        return new Promise((resolve) => {

            this.getSubscription = this._httpClient.post<any>(`${this.service}/SendSMTPGenericoTable`, project).subscribe({
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
