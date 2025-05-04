import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge } from 'lodash-es';
import { FuseConfirmationConfig } from './confirmation.types';
import { FuseConfirmationFormDialogComponent } from './dialog.form/dialog.form.component';
import { FuseConfirmationPdfDialogComponent } from './dialog.pdf/dialog.pdf.component';
import { FuseConfirmationDialogComponent } from './dialog/dialog.component';
@Injectable()
export class FuseConfirmationService {
    private _defaultConfig: FuseConfirmationConfig = {
        title: 'Confirm action',
        message: 'Are you sure you want to confirm this action?',
        icon: {
            show: true,
            name: 'heroicons_outline:exclamation',
            color: 'warn',
        },
        actions: {
            confirm: {
                show: true,
                label: 'Confirm',
                color: 'warn',
            },
            cancel: {
                show: true,
                label: 'Cancelar',
            },
        },
        dismissible: false,
    };

    /**
     * Constructor
     */
    constructor(private _matDialog: MatDialog) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(
        config: FuseConfirmationConfig = {}
    ): MatDialogRef<FuseConfirmationDialogComponent> {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(FuseConfirmationDialogComponent, {
            autoFocus: false,
            disableClose: !userConfig.dismissible,
            data: userConfig,
            panelClass: 'fuse-confirmation-dialog-panel',
        });
    }
    openForm(
        config: FuseConfirmationConfig = {}
    ): MatDialogRef<FuseConfirmationFormDialogComponent> {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(FuseConfirmationFormDialogComponent, {
            autoFocus: false,
            disableClose: !userConfig.dismissible,
            data: userConfig,
            panelClass: 'fuse-confirmation-dialog-panel',
        });
    }
    openPDF(
        config: FuseConfirmationConfig = {}
    ): MatDialogRef<FuseConfirmationPdfDialogComponent> {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(FuseConfirmationPdfDialogComponent, {
            autoFocus: false,
            disableClose: !userConfig.dismissible,
            data: userConfig,
            panelClass: 'fuse-confirmation-dialog-panel',
        });
    }
}
