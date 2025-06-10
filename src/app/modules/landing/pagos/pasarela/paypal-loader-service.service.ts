import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PaypalLoaderService {
    private loaded = false;

    loadSdk(): Promise<void> {

        if (this.loaded) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${environment.PAYPAL_CONFIG.paypalClientId}&currency=USD&locale=es_PE&intent=capture&enable-funding=card`;
            script.onload = () => {
                this.loaded = true;
                resolve();
            };
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }


}
