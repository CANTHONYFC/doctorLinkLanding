export class TipoIECajaDto {
    id_tipoIECaja: number;
    id_configCaja: number;
    descripcion: string;
    categoria_tipoIECaja: number;
    estado_reg: boolean;
    id_uneg: number;
    id_tipoIE_PG: number;
    orden: number;
  
    constructor(data?: Partial<TipoIECajaDto>) {
      if (data) {
          Object.assign(this, data);
      }
  }
  }