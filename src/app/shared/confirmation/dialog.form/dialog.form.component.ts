import {
    Component,
    Inject,
    OnInit,
    ViewEncapsulation,
    ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuseConfirmationConfig } from '../confirmation.types';
import {
    FormGroupDirective,
    FormGroup,
    FormBuilder,
    Validators,
} from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';
import { ElementRef } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'fuse-confirmation-form-dialog',
    templateUrl: './dialog.form.component.html',
    styles: [
        /* language=SCSS */
        `
            .fuse-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-dialog-container {
                    padding: 0 !important;
                }
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class FuseConfirmationFormDialogComponent implements OnInit {
    @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
    @ViewChild('passField') passField: ElementRef;

    credentialForm: FormGroup;
    alert: { type: FuseAlertType; message: string; show?: boolean } = {
        type: 'success',
        message: '',
        show: false,
    };
    /**
     * Constructor
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: FuseConfirmationConfig,
        private _formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<FuseConfirmationFormDialogComponent>
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.credentialForm = this._formBuilder.group({
            pass: ['', [Validators.required]],
        });

        setTimeout(() => {
            this.passField.nativeElement.focus();
            this.passField.nativeElement.type = 'password';
            this.passField.nativeElement.value = '';
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    eventSubmit() {
        if (this.credentialForm.invalid) {
            this.credentialForm.markAllAsTouched();
            return;
        }

        // Disable the form
        this.credentialForm.disable();
        let validation;
        validation.password = this.credentialForm.get('pass').value;
        
        this.manager(validation);
    }

    manager(validation: any): void {
        // this._validationService.manager(validation).pipe(
        //     finalize(() => {

        //         // Re-enable the form
        //         this.credentialForm.enable();
        //         // Reset the form
        //         this.credentialForm.reset();
        //         this.formDirective.resetForm();
        //         this.hiddeAlertTime();
        //     })
        // ).subscribe(
        //     (response) => {
        //         if (response.successful) {
        //             this.matDialogRef.close('confirmed');
        //         } else {
        //             // Set the alert
        //             this.alert = {
        //                 type: 'warning',
        //                 show: true,
        //                 message: response.message,
        //             };
        //         }
        //     },
        //     (response) => {
        //         // Set the alert
        //         this.alert = {
        //             type: 'error',
        //             show: true,
        //             message: 'Error interno al procesar la solicitud',
        //         };
        //     }
        // );
    }
   
    hiddeAlertTime() {
        setTimeout(() => {
            this.alert.show = false;
        }, 3000);
    }
}
