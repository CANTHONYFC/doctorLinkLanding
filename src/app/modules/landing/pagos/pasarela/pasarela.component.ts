import {Component, ViewChild} from '@angular/core';
import {PlanesService} from 'app/repository/services/PlanesService';
import {PaypalLoaderService} from "./paypal-loader-service.service";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {HttpParams} from '@angular/common/http';
import {PlanesSuscriptions} from 'app/models/administration/PlanesSuscriptions';
import {NgForm} from '@angular/forms';
import {NotificationService} from 'app/modules/shared/service/service-notification.service';
import {RegisterPagoPlanLanding} from "../../../../models/administration/RegisterPagoPlanLanding";
import {Router} from '@angular/router';
import {environment} from 'environments/environment';
import { NiubizLoaderService } from './niubiz-loader-service.service';
import { NiubizSessionRequest } from 'app/models/administration/NiubizDto';

declare var paypal: any;
declare var niubiz: any;

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
    modalAbiertoNiubiz = false;
    planes: PlanesSuscriptions[] = [];
    today: Date = new Date();
    service2: string = `${environment.apiEngine}Niubiz/pagos`;
    clientIp: string = "0.0.0.0";

    
    constructor(private paypalLoader: PaypalLoaderService,
                private planesService: PlanesService,
                private snackBar: MatSnackBar,
                private niubizLoader: NiubizLoaderService,
                private _router: Router) {
    }

    selectedPaymentMethod: string | null = null;

    ngOnInit(): void {
        // Parámetros si necesitas enviar algo, si no, puedes mandar HttpParams vacío
        this.listarPlanes();
        this.getClientIP().then(ip => this.clientIp = ip);
    }

    getClientIP(): Promise<string> {
      return fetch('https://api.ipify.org?format=text')
        .then(res => res.text())
        .then(ip => ip.trim())
        .catch(() => "0.0.0.0");
    }

    irHome() {
        this._router.navigateByUrl('/app');
    }

    listarPlanes() {
        const params = new HttpParams()
            .set('type', this.paymentMode);
        this.planesService.listPlanes(params, this.snackBar).then(response => {

            if (response && response.data) {

                this.planes = response.data;

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
    purchaseNumber: string ;
    amount: string ;

    generarPurchaseNumber(): string {
      // Generar un número único de 12 dígitos
      return Date.now().toString().slice(-12);
    }

    changeInterval(interval_unit: string): any {
        this.paymentMode = interval_unit
        this.listarPlanes()
    }

    cerrarModal() {
        this.modalAbierto = false;
    }

    cerrarModalNiubiz() {
        this.modalAbiertoNiubiz = false;
    }

    iniciarPagoPaypal() {
        if (this.miFormulario.valid && this.selectedPlan) {

            const params = new HttpParams()
                .set('correo', this.correo);
            this.planesService.verifyExits(params, this.snackBar).then(response => {

                if (response && response.data) {
                    if (response.data) {
                        NotificationService.error('El correo ya está registrado. Por favor, intentar con otro correo');
                        return;
                    }
                }

                this.modalAbierto = true;
                // Esperar a que el div #paypal-button-container esté en el DOM
                setTimeout(() => {
                    this.paypalLoader.loadSdk().then(() => {

                        this.renderPaypalButton();
                    }).catch((err) => {
                        console.error('Error cargando PayPal SDK:', err);
                    });
                }, 0);
            });
        } else {
            this.miFormulario.control.markAllAsTouched();
        }
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
                    NotificationService.Loader()
                    console.log('Pago completado por: ', details.payer.name.given_name);

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
                            NotificationService.RemoveLoader();
                            NotificationService.success('Gracias por tu pago, ' + details.payer.name.given_name);
                            const url = `${environment.URL_TWODOMAIN}#/sign-in?id_uneg=${response.data.id_uneg}&id_user=${response.data.id_user}&token=${encodeURIComponent(response.data.token)}`;

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

    iniciarPagoNiubiz() {
      if (!this.miFormulario.valid || !this.selectedPlan) {
        this.miFormulario.control.markAllAsTouched();
        return;
      }

      const params = new HttpParams().set('correo', this.correo);
    
        this.planesService.verifyExits(params, this.snackBar).then(response => {
        if (response && response.data) {
          NotificationService.error('El correo ya está registrado. Por favor, intente con otro correo');
          return;
        }
        debugger
        this.purchaseNumber = this.generarPurchaseNumber();
        this.amount  = this.selectedPlan.precioTotal.toFixed(2);
    
        this.modalAbiertoNiubiz = true; 
        
        const sessionRequest = new NiubizSessionRequest({
          amount: this.amount ,
          antifraud: {
            clientIp: this.clientIp,
    
            merchantDefineData: {
              MDD4: 'integraciones@niubiz.com.pe',
              MDD32: this.purchaseNumber,
              MDD75: 'Registrado',
              MDD77: '458'
            }
          },
          dataMap: {
            cardholderCity: 'LIMA',
            cardholderCountry: 'PE',
            cardholderAddress: 'Av. Ejemplo 123',
            cardholderPostalCode: '15001',
            cardholderState: 'LIMA',
            cardholderPhoneNumber: '999999999'
          }
        });
    
        this.planesService.createNiubizSession(sessionRequest)
          .then(sessionData => {
            setTimeout(() => {
                debugger
              this.niubizLoader.loadNiubizSdk({
                containerId: 'niubiz-button-container', 
                sessiontoken: sessionData.sessionKey,
                merchantid: environment.NIUBIZ_CONFIG.merchantId,
                purchasenumber: this.purchaseNumber,
                amount: this.amount ,
                timeouturl: `${environment.URL_TWODOMAIN}/pago-expirado`,
                merchantlogo: `${environment.URL_TWODOMAIN}/assets/logo.png`,
                expirationminutes: 20,
                formbuttoncolor: '#FF0000',
                showamount: 'TRUE',
                hidexbutton: 'FALSE'
              }).then(() => {
                console.log('Niubiz SDK cargado y botón visible');

              }).catch(err => {
                console.error('Error cargando Niubiz SDK:', err);
                NotificationService.error('No se pudo cargar la pasarela de pago.');
              });
            }, 0);
          })
          .catch(err => {
            console.error('Error creando SessionToken:', err);
            NotificationService.error('No se pudo iniciar el pago.');
          });
      });
    }

    regresarHome(event){
        debugger
        event.preventDefault();
        console.log(event)
    }

    
 
}

