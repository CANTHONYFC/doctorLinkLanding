import {Injectable} from '@angular/core';
import {PAYPAL_CONFIG} from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PaypalLoaderService {
    private loaded = false;

    loadSdk(): Promise<void> {
        debugger
        if (this.loaded) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CONFIG.paypalClientId}&currency=USD&locale=es_PE&intent=capture`;
            script.onload = () => {
                this.loaded = true;
                resolve();
            };
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

  
}
