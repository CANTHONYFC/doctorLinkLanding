export class LibroReclamacion {
  nombreCompleto: string;
  dniRuc: string;
  correoElectronico: string;
  telefonoContacto: string;
  planAdquirido: string;
  fechaContratacion: string;
  medioPago: string;
  tipoSolicitud: 'Reclamo' | 'Queja';
  detalleReclamoQueja: string;
  accionSolicitada: string;
}
