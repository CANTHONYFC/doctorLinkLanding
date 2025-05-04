import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuseConfirmationConfig } from '../confirmation.types';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Component({
    selector: 'fuse-confirmation-pdf-dialog',
    templateUrl: './dialog.pdf.component.html',
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
export class FuseConfirmationPdfDialogComponent implements OnInit {
    fileUrl: SafeResourceUrl[] = [];
    /**
     * Constructor
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: FuseConfirmationConfig,
        private _sanitizer: DomSanitizer,
        public matDialogRef: MatDialogRef<FuseConfirmationPdfDialogComponent>
    ) { }
    ngOnInit(): void {
    }

    delete(index: number) {

    }
}
