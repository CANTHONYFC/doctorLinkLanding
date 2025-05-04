export class EmpresaDto {
    id: number;
    idUneg: number;
    ruc: string;
    razonSocial: string;
    direccion: string;
    image: string | null; 
    color: string;
    video: string;
    fechaRegistro: Date | null;
    userRegister: string | null;
    fechaModifica: string;
    userModifica: string;
    estadoReg: boolean;
    country_code: string = '+51';
    telefono: string | null;
    celular: string | null;
    emailRecepcion: string | null;
    brevePresentacion: string | null;
    paginaWeb: string | null;
    googleMaps: string | null;
  
    constructor(data?: Partial<EmpresaDto>) {
      if (data) {
          Object.assign(this, data);
          if (data.celular) {                
            const telefonoMatch = data.celular.match(/^(\+\d+)\s(.+)$/);                
            if (telefonoMatch) {                    
                this.country_code = telefonoMatch[1];                    
                this.celular = telefonoMatch[2];                
            } else {                    
                this.celular = data.celular;                
            }            
        }
      }

  }

    toJSON(){
        return {
            ...this,
            celular:this.country_code+' '+this.celular
        }
    }

  }