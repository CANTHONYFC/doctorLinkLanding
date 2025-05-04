export class TipoMedioPagoDto {
    id_tipoMedioPago: number;
    nombre: string;
    id_tipoPago_pg: number;
    fecha_registro: Date;
    user_register: string ;
    fecha_modifica: Date;
    user_modifica: string ;
    estado_reg: boolean;
    id_uneg: number ;
    id_configCaja: number;
    categoria_tipoMedioPago: number ;
  
    constructor(data?: Partial<TipoMedioPagoDto>) {
      if (data) {
          Object.assign(this, data);
      }
  }
  }