import { Component } from '@angular/core';
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import { MailingService } from "../../../../repository/services/mailing.service";  // Importa el servicio
import {LibroReclamacion} from "../../../../models/administration/LibroReclamacionForm";

import { NotificationService } from "../../../shared/service/service-notification.service";  // Para mostrar notificaciones

@Component({
  selector: 'app-libro-reclamacion',
  templateUrl: './libro-reclamacion.component.html',
  styleUrls: ['./libro-reclamacion.component.scss']
})
export class LibroReclamacionComponent {
  libroReclamacion: LibroReclamacion = new LibroReclamacion();

  constructor(
    private _snackBar: MatSnackBar,
    private _mailingService: MailingService,  // Inyectamos el servicio para enviar el correo
  ) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Datos del formulario:', this.libroReclamacion);

    // Preparar los datos para enviarlos
    const genericoTable = {
      tituloTabla: "LIBRO DE RECLAMACIONES",
      campos: [
        { titulo: "NOMBRES COMPLETOS", descripcion: this.libroReclamacion.nombreCompleto },
        { titulo: "DNI / RUC", descripcion: this.libroReclamacion.dniRuc },
        { titulo: "CORREO", descripcion: this.libroReclamacion.correoElectronico },
        { titulo: "TELÉFONO", descripcion: this.libroReclamacion.telefonoContacto },
        { titulo: "PLAN ADQUIRIDO", descripcion: this.libroReclamacion.planAdquirido },
        { titulo: "FECHA DE CONTRATACIÓN", descripcion: this.libroReclamacion.fechaContratacion },
        { titulo: "MEDIO DE PAGO", descripcion: this.libroReclamacion.medioPago },
        { titulo: "TIPO DE SOLICITUD", descripcion: this.libroReclamacion.tipoSolicitud },
        { titulo: "DETALLE DEL RECLAMO / QUEJA", descripcion: this.libroReclamacion.detalleReclamoQueja },
        { titulo: "ACCION SOLICITADA", descripcion: this.libroReclamacion.accionSolicitada }
      ]
    };

    // Enviar los datos al servicio de mailing
    this._mailingService.sendSMTPGenericoTable(genericoTable, this._snackBar)
      .then(response => {
        NotificationService.RemoveLoader();  // Elimina el loader si lo tienes
        this.libroReclamacion = new LibroReclamacion();  // Limpiar el formulario
        NotificationService.success('Tu reclamo ha sido enviado exitosamente.');
      })
      .catch(() => {
        NotificationService.RemoveLoader();
        NotificationService.error('Hubo un error al enviar tu reclamo.');
      });
  }
}
