import {Component} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {PaypalLoaderService} from "../../pagos/pasarela/paypal-loader-service.service";
import {PlanesService} from "../../../../repository/services/PlanesService";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {Router} from "@angular/router";
import {PlanesSuscriptions} from 'app/models/administration/PlanesSuscriptions';

@Component({
    selector: 'app-section9',
    templateUrl: './section9.component.html',
    styleUrls: ['./section9.component.scss']
})
export class Section9Component {
    yearlyBilling: boolean = true;


    planes: PlanesSuscriptions[] = [];
    planPeriod: 'MONTH' | 'YEAR' = 'MONTH';


    constructor(private paypalLoader: PaypalLoaderService,
                private planesService: PlanesService,
                private snackBar: MatSnackBar,
                private _router: Router) {
    }

    setPlanPeriod(period: 'MONTH' | 'YEAR') {
        this.planPeriod = period;
        this.listarPlanes()
    }

    ngOnInit(): void {
        // Parámetros si necesitas enviar algo, si no, puedes mandar HttpParams vacío
        this.listarPlanes();
    }

    listarPlanes() {
        const params = new HttpParams()
            .set('type', this.planPeriod);
        this.planesService.listPlanes(params, this.snackBar).then(response => {

            if (response && response.data) {

                this.planes = response.data;

            }
        });
    }
}
