import {Component} from '@angular/core';
import {PlanesService} from 'app/repository/services/PlanesService';
import {PaypalLoaderService} from "./paypal-loader-service.service";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {HttpParams} from '@angular/common/http';
import {PlanesSuscriptions} from 'app/models/administration/PlanesSuscriptions';

declare var paypal: any;

@Component({
    selector: 'app-pasarela',
    templateUrl: './pasarela.component.html',
    styleUrls: ['./pasarela.component.scss']
})
export class PasarelaComponent {
    selectedPlan: PlanesSuscriptions | null = null;
    mostrarBotonPaypal = false;
    correo = '';
    password = '';
    modalAbierto = false;
    planes: PlanesSuscriptions[] = [];
    today: Date = new Date();

    constructor(private paypalLoader: PaypalLoaderService,
                private planesService: PlanesService,
                private snackBar: MatSnackBar) {
    }

    plans = {
        basico: {
            name: 'Plan Básico',
            anualPrice: 29,
            mensualPrice: 33,
            methods: ['Tarjeta', 'PayPal', 'Transferencia bancaria'],
            description: 'Pago mediante transferencia bancaria o tarjeta de crédito/débito.'
        },
        gold: {
            name: 'Plan Gold',
            anualPrice: 49,
            mensualPrice: 57,
            methods: ['Tarjeta', 'PayPal', 'Transferencia bancaria'],
            description: 'Pago con tarjeta, PayPal o transferencia bancaria.'
        },
        premium: {
            name: 'Plan Premium',
            anualPrice: 59,
            mensualPrice: 69,
            methods: ['Tarjeta', 'PayPal', 'Transferencia bancaria'],
            description: 'Pago con todos los métodos disponibles, incluyendo PayPal, tarjeta, transferencia y criptomonedas.'
        }
    };

    selectedPaymentMethod: string | null = null;

    ngOnInit(): void {
        // Parámetros si necesitas enviar algo, si no, puedes mandar HttpParams vacío
        const params = new HttpParams()
            .set('type', 'MONTH');
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

    paymentMode: 'MONTH' | 'YEAR' = 'MONTH';

    iniciarPago() {
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
    }

    cerrarModal() {
        this.modalAbierto = false;
    }

    renderPaypalButton() {
        const precio = 59;

        const container = document.getElementById('paypal-button-container');
        if (!container) {
            console.error('No se encontró el contenedor de PayPal');
            return;
        }

        // Evitar múltiples renderizados
        container.innerHTML = '';

        paypal.Buttons({
            createOrder: function (data, actions) {
                // Aquí creas la orden de pago única
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '10.00' // monto a cobrar
                        }
                    }]
                });
            },

            onApprove: function (data, actions) {
                // Captura el pago
                return actions.order.capture().then(function (details) {
                    // Aquí recibes los detalles del pago completado
                    console.log('Pago completado por: ', details.payer.name.given_name);

                    // Guardar la info en tu backend para registrar este pago
                    fetch('/guardar-pago', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            orderId: data.orderID,
                            payerId: data.payerID,
                            payerEmail: details.payer.email_address,
                            amount: details.purchase_units[0].amount.value
                        })
                    });

                    alert('Gracias por tu pago, ' + details.payer.name.given_name);
                });
            },

            onError: function (err) {
                console.error('Error en PayPal: ', err);
            }

        }).render('#paypal-button-container');
    }
}

