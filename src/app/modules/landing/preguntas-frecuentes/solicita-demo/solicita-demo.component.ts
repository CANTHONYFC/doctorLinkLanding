import {Component, ViewChild} from '@angular/core';
import {MailingService} from "../../../../repository/services/mailing.service";
import {GenericoTableSmtpDto, MailCampoDto} from "../../../../models/Mailing/GenericoTableSmtpDto";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {NgForm} from "@angular/forms";
import {NotificationService} from "../../../shared/service/service-notification.service";
import {DemoForm} from "../../../../models/administration/DemoForm";

@Component({
    selector: 'app-solicita-demo',
    templateUrl: './solicita-demo.component.html',
    styleUrls: ['./solicita-demo.component.scss']
})
export class SolicitaDemoComponent {
    genericoTable: GenericoTableSmtpDto;
    demoForm: DemoForm = new DemoForm();
    @ViewChild('miFormulario') miFormulario: NgForm;

    constructor(
        private _snackBar: MatSnackBar,
        private _mailingService: MailingService,
    ) {

    }


    enviarGenericInfo(event: Event) {
        event.preventDefault(); // ✅ Previene el comportamiento por defecto del formulario
        event.stopPropagation();
        // Verifica que ambos formularios estén inicializados
        if (this.miFormulario.valid) {
            this.genericoTable = new GenericoTableSmtpDto()
            this.genericoTable.tituloTabla = "SOLICITUD DEMO"
            let newCampos = new MailCampoDto()
            newCampos.titulo = "NOMBRES COMPLETOS"
            newCampos.descripcion = this.demoForm.nombreCompleto
            this.genericoTable.campos.push(newCampos)
            newCampos = new MailCampoDto()
            newCampos.titulo = "ESPECIALIDAD"
            newCampos.descripcion = this.demoForm.especialidad
            this.genericoTable.campos.push(newCampos)
            newCampos = new MailCampoDto()
            newCampos.titulo = "CELULAR"
            newCampos.descripcion = this.demoForm.celular
            this.genericoTable.campos.push(newCampos)
            newCampos = new MailCampoDto()
            newCampos.titulo = "CORREO"
            newCampos.descripcion = this.demoForm.correo
            this.genericoTable.campos.push(newCampos)
            newCampos = new MailCampoDto()
            newCampos.titulo = "PAIS"
            newCampos.descripcion = this.demoForm.pais
            this.genericoTable.campos.push(newCampos)
            newCampos = new MailCampoDto()
            newCampos.titulo = "PROCESO A AUTOMATIZAR"
            newCampos.descripcion = this.demoForm.procesoAutomatizar
            this.genericoTable.campos.push(newCampos)


            this._mailingService.sendSMTPGenericoTable(this.genericoTable, this._snackBar)
                .then(response => {
                    NotificationService.RemoveLoader();
                    this.demoForm = new DemoForm();
                    NotificationService.success('Correo Enviado');
                })
                .catch(() => {
                    NotificationService.RemoveLoader();
                    NotificationService.error('Hubo un error al enviar el correo.');
                });
            // Lógica de guardado aquí

        } else {
            this.miFormulario.form.markAllAsTouched();
        }
    }
}
