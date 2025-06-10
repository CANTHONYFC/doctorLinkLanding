import {HttpParams} from '@angular/common/http';
import {Component} from '@angular/core';
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {Router} from '@angular/router';
import {PlanesService} from 'app/repository/services/PlanesService';
import {PlanesSuscriptions} from "../../../../models/administration/PlanesSuscriptions";
import {PaypalLoaderService} from '../../pagos/pasarela/paypal-loader-service.service';

@Component({
    selector: 'app-section9',
    templateUrl: './section9.component.html',
    styleUrls: ['./section9.component.scss']
})
export class Section9Component {
    yearlyBilling: boolean = true;

    planes: PlanesSuscriptions[] = [];

    planPeriod: 'MONTH' | 'YEAR' = 'MONTH';

    prices = {
        basico: {
            mensual: 33,
            anual: 29, // 20% descuento por anual
        },
        pro: {
            mensual: 57,
            anual: 49, // sin descuento, se factura 1500 en total
            anualFacturado: 1500,
        },
        enterprise: {
            mensual: 69,
            anual: 59, // 15% descuento por anual (ejemplo)
            anualFacturado: 2550, // podría ser distinto al cálculo para mostrar facturado
        },
    };

    constructor(private paypalLoader: PaypalLoaderService,
                private planesService: PlanesService,
                private snackBar: MatSnackBar,
                private _router: Router) {
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

    setPlanPeriod(period: 'MONTH' | 'YEAR') {
        this.planPeriod = period;
        this.listarPlanes()
    }
}
