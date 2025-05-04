declare const google: any;
import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/core/auth/auth.service';
import FingerprintGenerator from 'app/shared/util/utils/Fingerprint';
import {  setSessionStorage } from 'app/shared/util/utils/Storage';
import * as Constants from 'app/shared/util/constants/constants';
import { finalize } from 'rxjs';
import {  openSnackBar, openSnackBarError } from 'app/shared/util/operations/operations';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { FuseAlertType } from '../../../../@fuse/components/alert/alert.types';
import { ROUTES, ROUTES_APP } from 'app/shared/util/constants/route';
import {CONFIG_GOOGLE} from "../../../../environments/environment"; // ✅ Importa environment

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./sign-in.css'],
    animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit,AfterViewInit  {
    @ViewChild('signInNgForm') signInNgForm: NgForm;
    signInForm: FormGroup;
    alert: { type: FuseAlertType; message: string; show: boolean } = {
        type: 'success',
        message: '',
        show: false,
    };


    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _snackBar: MatSnackBar,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) {
    }

    ngAfterViewInit() {
        // ✅ Renderiza el botón de Google en tu HTML
        google.accounts.id.initialize({
            client_id: CONFIG_GOOGLE.googleClientId,
            callback: this.handleCredentialResponse.bind(this)
        });

        google.accounts.id.renderButton(
            document.getElementById("googleButton"),
            { theme: "outline", size: "large" }
        );
    }

    getRefreshToken() {
        const client = google.accounts.oauth2.initCodeClient({
            client_id: CONFIG_GOOGLE.googleClientId,
            scope: "openid email profile https://www.googleapis.com/auth/calendar",
            ux_mode: "popup",
            access_type: "offline",  // 🔹 Necesario para obtener el Refresh Token
            prompt: "consent",       // 🔹 Fuerza la solicitud del Refresh Token
            callback: (response: any) => {
                if (response.code) {
                    console.log("Authorization Code:", response.code);

                    this.exchangeCodeForTokens(response.code);
                } else {
                    console.error("Error en la autenticación", response);
                }
            }
        });

        // 📌 Solicita el código de autorización (popup)
        client.requestCode();
    }

    handleCredentialResponse(response: any) {
        console.log("ID Token: ", response.credential);
        this._authService.signInWithGoogleToken(response.credential).pipe(
            finalize(() => {
                // Re-enable the form
                this.signInForm.enable();
                // Reset the form
                this.signInNgForm.resetForm();
            })
        ).subscribe({
            next: (response) => {
                if (response.successful) {
                    let redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                    this._router.navigateByUrl('app/company-selection');
                } else {
                    openSnackBar(this._snackBar,
                        response.message, 'mat-warn');
                }
            },
            error: () => openSnackBarError(
                this._snackBar
                //this.signInForm.enable();
            )
        }
        );
        // Aquí puedes enviar el token al backend .NET para validarlo
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email: ['admin@gmail.com', [Validators.required, Validators.email]],
            password: ['1234ABCabc###', [Validators.required, Validators.pattern(
                "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,20}$" // Test@123
            )]],
            rememberMe: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        // Sign in
        // Re-enable the form
        /*this.signInForm.enable();
        // Reset the form
        this.signInNgForm.resetForm();
        let redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
        this._router.navigateByUrl('app/company-selection');
        return*/
        this._authService.signIn({ userName: this.signInForm.get('email').value, password: this.signInForm.get('password').value })
            .pipe(
                finalize(() => {
                    // Re-enable the form
                    this.signInForm.enable();
                    // Reset the form
                    this.signInNgForm.resetForm();
                })
            ).subscribe({
                next: (response) => {

                    if (response.successful) {
                        let redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                        let url='app/source'+response.menus[0].enlace

                        this._router.navigateByUrl(url);
                    } else {
                        openSnackBar(this._snackBar,
                            response.message, 'mat-warn');
                    }
                },
                error: () => openSnackBarError(
                    this._snackBar
                    //this.signInForm.enable();
                )
            }
            );
    }


    exchangeCodeForTokens(code: string) {
        this._authService.exchangeCodeForTokens(code).subscribe({
            next: (response) => {

                if (response.successful) {
                    let redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    let url='app/source'+response.menus[0].enlace

                    this._router.navigateByUrl(url);
                } else {
                    openSnackBar(this._snackBar,
                        response.message, 'mat-warn');
                }
                // Guarda los tokens en el almacenamiento seguro
            },
            error: (err) => console.error("Error al intercambiar el código:", err)
        });
    }
    eventSubmit() {
        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }
        // Disable the form
        this.signInForm.disable();
        FingerprintGenerator.generate().then((result) => {
            setSessionStorage(Constants.FINGERPRINT, result);
            this.signIn();
        });

    }

}
