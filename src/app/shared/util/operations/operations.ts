import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { FuseConfirmationService } from "@fuse/services/confirmation";

export const getAlert = function (alert: any, message: string = '', type: any = 'warning', time: number = 4000) {
    // Set the alert
    alert.type = type;
    alert.message = message;
    alert.show = true;
    setTimeout(() => {
        alert.show = false;
    }, time);
}
export const openSnackBar = function (
    _snackBar: MatSnackBar,
    message: string,
    type: string = 'mat-primary',
    position: any = 'center'
) {
    let arrayClass = type.split(' ');
    arrayClass.push('mat-toolbar');
    _snackBar.open(message, 'X', {
        horizontalPosition: position,
        verticalPosition: 'bottom',
        duration: 4000,
        panelClass: arrayClass,
    });
    /* 'mat-primary' to 'mat-accent' or 'mat-warn' */
}
export const openSnackBarError = function (
    _snackBar: MatSnackBar,
    message: string = 'Error interno al procesar la solicitud',
) {
    openSnackBar(
        _snackBar,
        message,
        'mat-warn'
    );

}
export const openConfirmationDialog = function (
    parameters: {
        fuseConfirmationService: FuseConfirmationService,
        action: () => void,
        message?: string
    }
) {
    if (!parameters.message) {
        parameters.message = `¿Está seguro de eliminar este registro?`;
    }

    // Open the confirmation dialog
    const confirmation = parameters.fuseConfirmationService.open({
        title: 'Eliminar',
        message: parameters.message,
        actions: {
            confirm: {
                label: 'Eliminar',
            },
        },
    });
    // Subscribe to the confirmation dialog closed action
    confirmation.afterClosed().subscribe((result) => {
        // If the confirm button pressed...
        if (result === 'confirmed') {
            parameters.action();
        }
    });
}
