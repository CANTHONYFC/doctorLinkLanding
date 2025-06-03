import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor() {
    }

    private static confirmOptions = {
        title: 'Confirmación',
        message: '¿Estás de acuerdo con esto?',
        yes: 'Sí',
        no: 'No',
        onYes: () => {
            alert('Gracias.');
        },
        onNo: () => {
            alert('Si así lo dices...');
        },
        options: {
            confirmButtonColor: 'var(--app-resalt-1-color,green)',
            cancelButtonColor: '#999999',
            titleColor: 'var(--app-resalt-1-color,green)',
            messageColor: '#222'
        }
    };

    static warning(message: string, config: any = {}): void {
        Swal.fire({
            icon: 'warning',
            title: '',
            text: message,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            ...config
        });
    }

    static success(message: string, config: any = {}): void {
        Swal.fire({
            icon: 'success',
            title: '',
            text: message,
            toast: true,
            position: 'top-end', // Ubicación del mensaje (puedes cambiarla a 'top-left', 'bottom-right', etc.)
            showConfirmButton: false, // No muestra el botón de confirmación
            timer: 3000, // Duración en milisegundos
            ...config // Cualquier configuración adicional que pase el usuario
        });
    }

    static error(message: string, config: any = {}): void {
        Swal.fire({
            icon: 'error',
            title: '',
            text: message,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            ...config
        });
    }

    static info(message: string, config: any = {}): void {
        Swal.fire({
            icon: 'info',
            title: '',
            text: message,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            ...config
        });
    }

    static Loader() {
        /*Swal.fire({
            title: 'Cargando...',
            html: 'Por favor espera...',
            didOpen: () => {
                Swal.showLoading();
            }
        });*/
        Swal.fire({
            title: '',
            html: `
            <img src='assets/images/logo/logo_blanco.png' style='width:100px;'/>  
            <div class="mydoc-spinner"><div></div><div></div></div>
            `,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            background: '#fff',
            customClass: {
              popup: 'swal2-loading-fullscreen'
            },
            didOpen: () => {
              // Aquí podrías hacer algo mientras se muestra la pantalla de carga
            }
        });
    }

    static RemoveLoader() {
        Swal.close();
    }

    static ShowConfirm(options: any = {}) {
        let nOption = options?.options ? options.options : {};
        let o = {
            ...this.confirmOptions,
            ...options,
            options: {
                ...this.confirmOptions.options,
                ...nOption
            }
        };

        Swal.fire({
            title: o.title,
            text: o.message,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: o.yes,
            cancelButtonText: o.no,
            confirmButtonColor: o.options.confirmButtonColor,
            cancelButtonColor: o.options.cancelButtonColor,
        }).then((result) => {
            if (result.isConfirmed) {
                o.onYes();
            } else {
                o.onNo();
            }
        });
    }
}
