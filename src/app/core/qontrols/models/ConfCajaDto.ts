export class ConfigCajaDto  {
    idConfigCaja: number;
    flagTicketDoctor: boolean = false;
    flagTipoCambio: boolean= false;
    fechaRegistro: string;
    userRegister: string | null;
    fechaModifica: string;
    userModifica: string;
    estadoReg: boolean;
    idUneg: number;
  
    constructor(data?: Partial<ConfigCajaDto>) {
      if (data) {
          Object.assign(this, data);
      }
  }
  }