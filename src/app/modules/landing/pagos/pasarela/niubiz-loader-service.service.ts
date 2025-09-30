import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NiubizLoaderService {
  private sdkLoaded = false;

  loadNiubizSdk(options: {
    containerId: string,         
    sessiontoken: string,
    merchantid: string,
    purchasenumber: string,
    amount: string,
    timeouturl: string,
    merchantlogo: string,
    expirationminutes?: number,
    formbuttoncolor?: string,
    showamount?: string,
    hidexbutton?: string,
    completeurl?: string,
    onComplete?: (result: any) => void, // callback de éxito
    onError?: (error: any) => void      // callback de error
  }): Promise<void> {
    return new Promise((resolve, reject) => {
      const container = document.getElementById(options.containerId);
      if (!container) {
        reject('No se encontró el contenedor para Niubiz');
        return;
      }

      container.innerHTML = '';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://static-content-qas.vnforapps.com/env/sandbox/js/checkout.js';


      script.setAttribute('data-sessiontoken', options.sessiontoken);
      script.setAttribute('data-channel', 'web');
      script.setAttribute('data-merchantid', options.merchantid);
      script.setAttribute('data-purchasenumber', options.purchasenumber);
      script.setAttribute('data-amount', options.amount);
      script.setAttribute('data-timeouturl', options.timeouturl);
      script.setAttribute('data-merchantlogo', options.merchantlogo);
      if (options.expirationminutes) script.setAttribute('data-expirationminutes', options.expirationminutes.toString());
      if (options.formbuttoncolor) script.setAttribute('data-formbuttoncolor', options.formbuttoncolor);
      if (options.showamount) script.setAttribute('data-showamount', options.showamount);
      if (options.hidexbutton) script.setAttribute('data-hidexbutton', options.hidexbutton);
      if (options.completeurl) script.setAttribute('data-completeurl', options.completeurl);

      container.appendChild(script);

      script.onload = () => {

        if (typeof (window as any).VisanetCheckout !== 'undefined' && options.onComplete) {
          (window as any).VisanetCheckout.configure({
            sessiontoken: options.sessiontoken,
            channel: 'web',
            merchantid: options.merchantid,
            purchasenumber: options.purchasenumber,
            amount: options.amount,
            complete: (result: any) => {
              options.onComplete!(result);
            },
            error: (err: any) => {
              if (options.onError) {
                options.onError(err);
              } else {
                console.error('Error en Niubiz', err);
              }
            }
          });
        }
        resolve();
      };

      script.onerror = (err) => reject(err);
    });
  }
}
