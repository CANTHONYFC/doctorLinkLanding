import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FuseConfirmationDialogComponent } from './dialog/dialog.component';
import { FuseConfirmationService } from './confirmation.service';
import { MatInputModule } from '@angular/material/input';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { FuseConfirmationFormDialogComponent } from './dialog.form/dialog.form.component';

@NgModule({
    declarations: [
        FuseConfirmationDialogComponent,
        FuseConfirmationFormDialogComponent,
    ],
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        CommonModule,
        FuseAlertModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
    ],
    providers: [FuseConfirmationService],
})
export class FuseConfirmationModule {
    /**
     * Constructor
     */
    constructor(private _fuseConfirmationService: FuseConfirmationService) {}
}
