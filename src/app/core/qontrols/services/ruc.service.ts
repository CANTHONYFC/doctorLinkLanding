import { Injectable } from "@angular/core";
import { HttpClient, HttpParams,HttpHeaders } from "@angular/common/http";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { openSnackBarError } from "app/shared/util/operations/operations";
import { environment } from "environments/environment";
import { Observable, Subscription} from "rxjs";
import { map, catchError } from "rxjs/operators";
import * as Builders from "app/shared/util/utils/Builders";
import { ApiResponse } from "../interface/response/api.response";

const MIGO_API = {
	dni:'https://api.migo.pe/api/v1/dni',
	ruc: 'https://api.migo.pe/api/v1/ruc'
};

@Injectable({
    providedIn: 'root'
})
export class RucService {
    private service: string = `${environment.serviceSettingOperation}business-partner`;
    private serviceSunat: string = `${environment.serviceSettingOperation}consult`;
    private getSubscription: Subscription;
    private TOKEN:string='';

    constructor(private _httpClient: HttpClient) {
        this.TOKEN = this.getParameter('TOKEN_MIGO_API');
    }

    get(parameters: HttpParams, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.service}`, {params : parameters}).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        })
    }

    getSunat2(code: string, _snackBar: MatSnackBar): Promise<ApiResponse<any>> {
        return new Promise((resolve) => {
            this.getSubscription = this._httpClient.get<any>(`${this.serviceSunat}/ruc/${code}`).
                subscribe({
                    next: (data) => { resolve(data) },
                    error: () => {
                        openSnackBarError(_snackBar);
                    }
                })
        })
    }

    public getSunat(ruc?: string): Observable<any> {
		const URL = MIGO_API.ruc;
		const body = {
			ruc,
			token: this.TOKEN || '6w1i7c9GqWOUczl1SFEzmqpHRKftiwCI81P9vA3XQh2VZvJRgB8pnUT5R6BB'
		}
        console.log('xxxxxx',this.TOKEN)
		let headers: HttpHeaders = Builders.buildHeader();
		return this._httpClient.post<any>(URL, body,{
				headers: headers,
				observe: "response"
			})
			.pipe(map(response => response.body))
            .pipe(catchError(this.handleError("getRUC", [{"successful":false,"code":"00","message":"Error."}])));
	}

    public getParameter(code: string) {
         let parameters = [];
        if (sessionStorage.Parameters) {
            JSON.parse(sessionStorage.Parameters).forEach(element => {
                parameters.push(element);
            });
        }
        let parameter;
        parameters.forEach(element => {
            if (element.name == code || element.parameterKey == code) {
                parameter = element;
            }
        });
        return parameter?.value;
    }

    protected handleError(admin = "admin", result?: any) {
		return (error: any): Observable<any> => {
			console.info({ error: error });
			return result;
		};
	}

    unSub() {
        this.getSubscription?.unsubscribe();
    }
}
