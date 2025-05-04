import { Injectable } from '@angular/core';
import {CONFIG_GOOGLE} from "../../../../environments/environment";
declare const google: any;
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private clientId = CONFIG_GOOGLE.googleClientId;

    constructor() {}
    loadGoogleAuth(callback: () => void) {
  // Declarar google dentro del método también es una opción

        window.onload = () => {
            google.accounts.id.initialize({
                client_id: this.clientId,
                callback: (response: any) => this.handleCredentialResponse(response)
            });
            google.accounts.id.prompt(); // Muestra el popup de login
            callback();
        };
    }

    handleCredentialResponse(response: any) {

        console.log('ID Token:', response.credential);
        // Enviar este token al backend para validar y obtener el refresh token
    }
}
