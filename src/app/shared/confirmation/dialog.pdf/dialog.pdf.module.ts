import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FuseConfirmationPdfDialogComponent } from './dialog.pdf.component';
import { FuseConfirmationService } from '../confirmation.service';
@NgModule({
    declarations: [FuseConfirmationPdfDialogComponent],
    imports: [
        MatDialogModule,
        CommonModule,
    ],
    providers: [FuseConfirmationService],
})
export class FuseConfirmationPdfModule {
    /**
     * Constructor
     */
    constructor(private _fuseConfirmationService: FuseConfirmationService) {}
}
