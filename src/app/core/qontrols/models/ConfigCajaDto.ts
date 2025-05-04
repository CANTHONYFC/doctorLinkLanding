export class ConfigCajaDto {
    id_configCaja: number;
    flagTicketDoctor: boolean;
    flagTipoCambio: boolean;
    fecha_registro: Date;
    user_register: string;
    fecha_modifica: Date;
    user_modifica: string;
    estado_reg: boolean;
    idUneg: number;
  
    constructor(data: any = {}) {
      this.id_configCaja = data.id_configCaja;
      this.flagTicketDoctor = data.flagTicketDoctor;
      this.flagTipoCambio = data.flagTipoCambio;
      this.fecha_registro = data.fecha_registro ? new Date(data.fecha_registro) : null;
      this.user_register = data.user_register;
      this.fecha_modifica = data.fecha_modifica ? new Date(data.fecha_modifica) : null;
      this.user_modifica = data.user_modifica;
      this.estado_reg = data.estado_reg;
      this.idUneg = data.idUneg;
    }
  }