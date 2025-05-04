export class PaginateCajaCoreDto {
  id_movimientoCaja?: number;
  id_aperturaCaja?: number;
  id_tipoCaja?: number;
  id_tipoDocumento?: number;
  id_Tipoingreso?: number;
  id_TipoEgreso?: number;
  monto?: number;
  notaAdministrativa?: string;
  nroFactura?: string;
  concepto?: string;
  id_medioPago?: number;
  id_doctor?: number;
  id_paciente?: number;
  user_register?: string;
  fecha_modifica?: Date;
  user_modifica?: string;
  estado_reg: boolean = false;
  id_uneg?: number;
  id_sucursal?: number;
  fecha_registro?: Date;
  nombre_completo_paciente?: string;
  nombre_completo_doctor?: string;
  hora_minuto?: string;
  tipoIngreso?: string;
  descripcionIngreso?: string;

  constructor(init?: Partial<PaginateCajaCoreDto>) {
    Object.assign(this, init);
  }
}
