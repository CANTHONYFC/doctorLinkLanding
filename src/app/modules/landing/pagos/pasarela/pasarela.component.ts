import {Component, ViewChild} from '@angular/core';
import {PlanesService} from 'app/repository/services/PlanesService';
import {PaypalLoaderService} from "./paypal-loader-service.service";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {HttpParams} from '@angular/common/http';
import {PlanesSuscriptions} from 'app/models/administration/PlanesSuscriptions';
import {NgForm} from '@angular/forms';
import {NotificationService} from 'app/modules/shared/service/service-notification.service';
import {RegisterPagoPlanLanding} from "../../../../models/administration/RegisterPagoPlanLanding";
import {URL_TWODOMAIN} from "../../../../../environments/enviroment.conts";
import {Router} from '@angular/router';

declare var paypal: any;

@Component({
    selector: 'app-pasarela',
    templateUrl: './pasarela.component.html',
    styleUrls: ['./pasarela.component.scss']
})
export class PasarelaComponent {
    @ViewChild('miFormulario') miFormulario!: NgForm;
    selectedPlan: PlanesSuscriptions | null = null;
    mostrarBotonPaypal = false;
    correo = '';
    password = '';
    modalAbierto = false;
    planes: PlanesSuscriptions[] = [];
    today: Date = new Date();

    constructor(private paypalLoader: PaypalLoaderService,
                private planesService: PlanesService,
                private snackBar: MatSnackBar,
                private _router: Router) {
    }


    selectedPaymentMethod: string | null = null;

    ngOnInit(): void {
        // Parámetros si necesitas enviar algo, si no, puedes mandar HttpParams vacío
        this.listarPlanes();
    }

    irHome() {
        this._router.navigateByUrl('/app');
    }

    listarPlanes() {
        const params = new HttpParams()
            .set('type', this.paymentMode);
        this.planesService.listPlanes(params, this.snackBar).then(response => {
            debugger
            if (response && response.data) {

                this.planes = response.data;
                debugger
            }
        });
    }

    selectPlan(plan: PlanesSuscriptions) {
        this.selectedPlan = plan;
        this.selectedPaymentMethod = null; // Reset método pago al cambiar plan
    }

    selectPaymentMethod(method: string) {
        this.selectedPaymentMethod = method;

        // if (method === 'PayPal') {
        //     this.paypalLoader.loadPaypalSdk().then(() => {
        //         setTimeout(() => this.renderPaypalButton(), 0);
        //     }).catch(err => {
        //         console.error('Error cargando PayPal SDK:', err);
        //     });
        // }
    }

    ngAfterViewInit(): void {

    }

    paymentMode: string = 'MONTH'; // Por defecto, puedes cambiarlo según tu lógica

    iniciarPago() {
        if (this.miFormulario.valid && this.selectedPlan) {


            const params = new HttpParams()
                .set('correo', this.correo);
            this.planesService.verifyExits(params, this.snackBar).then(response => {
                debugger
                if (response && response.data) {
                    debugger
                    if (response.data) {
                        NotificationService.error('El correo ya está registrado. Por favor, intentar con otro correo');
                        return;
                    }

                    debugger
                }
                this.modalAbierto = true;
                // Esperar a que el div #paypal-button-container esté en el DOM
                setTimeout(() => {
                    this.paypalLoader.loadSdk().then(() => {
                        debugger
                        this.renderPaypalButton();
                    }).catch((err) => {
                        console.error('Error cargando PayPal SDK:', err);
                    });
                }, 0);
                debugger
            });
        } else {
            this.miFormulario.control.markAllAsTouched();
        }
    }

    changeInterval(interval_unit: string): any {
        this.paymentMode = interval_unit
        this.listarPlanes()
    }

    cerrarModal() {
        this.modalAbierto = false;
    }

    renderPaypalButton() {
        const container = document.getElementById('paypal-button-container');
        if (!container) {
            console.error('No se encontró el contenedor de PayPal');
            return;
        }

        let precioCobrar = this.selectedPlan?.precioTotal.toFixed(2) ?? '0.00';
        container.innerHTML = '';

        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: precioCobrar,
                            currency_code: 'USD'
                        }
                    }]
                });
            },

            onApprove: (data, actions) => {
                return actions.order.capture().then((details) => {
                    console.log('Pago completado por: ', details.payer.name.given_name);
                    debugger
                    const registerPagoPlanLanding: RegisterPagoPlanLanding = {
                        orderId: data.orderID,
                        payerId: data.payerID,
                        payerEmail: details.payer.email_address,
                        amount: details.purchase_units[0].amount.value,
                        correo: this.correo,
                        password: this.password,
                        planId: this.selectedPlan?.id_planesSuscriptions
                    }
                    this.planesService.register(registerPagoPlanLanding, this.snackBar)
                        .then(response => {
                            NotificationService.success('Gracias por tu pago, ' + details.payer.name.given_name);
                            const url = `${URL_TWODOMAIN}#/sign-in?id_uneg=${response.data.id_uneg}&id_user=${response.data.id_user}&token=${encodeURIComponent(response.data.token)}`;
                            debugger
                            this.modalAbierto = false;  // por ejemplo, cierras el modal si usas uno
                            container.innerHTML = '';    // limpias el botón para que no vuelva a aparecer
                            window.location.href = url;
                        }).catch((err) => {
                        console.error('Error guardando pago:', err);
                    });
                });
            },

            onError: (err) => {
                console.error('Error en PayPal: ', err);
            }

        }).render('#paypal-button-container');
    }

}

