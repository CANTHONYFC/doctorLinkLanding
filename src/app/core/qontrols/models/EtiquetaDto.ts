import { getSelectedEmpresa } from "app/shared/util/utils/Storage";

export class EtiquetaDto{
    id_etiqueta: number;
    nombre: string = '';
    lugarUso: string = '';
    color: string = '#FFFF00';
    fecha_registro: string;
    user_register: string | null;
    fecha_modifica: string | null;
    user_modifica: string | null;
    estado_reg: boolean = true;
    id_uneg: number = getSelectedEmpresa().idUneg;

    /*private _*/esAgenda: boolean = false; //Agenda
    /*private _*/esCrm: boolean = false // CRM
    /*private _*/esHC: boolean = false //Historia clínica

    public static lugarUsos = ['Agenda','CRM','Historia Clínica'];

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            if(data.lugarUso && data.lugarUso !== null && data.lugarUso !== ''){
                
                this.esAgenda = data.lugarUso.toLowerCase().indexOf('agenda') > -1 ? true : false;
                this.esCrm = data.lugarUso.toLowerCase().indexOf('crm') > -1 ? true : false;
                this.esHC = data.lugarUso.toLowerCase().indexOf('historia') > -1 ? true : false;
            }
        }
    }

    /*set esAgenda(_esAgenda:boolean){
        this._esAgenda = _esAgenda;
        //this.adapterLugarUso();
    }
    get esAgenda():boolean{
        return this._esAgenda;
    }

    set esCrm(_esCrm:boolean){
        this._esCrm = _esCrm;
        //this.adapterLugarUso();
    }
    get esCrm():boolean{
        return this._esCrm;
    }

    set esHC(_esHC:boolean){
        this._esHC = _esHC;
        //this.adapterLugarUso();
    }
    get esHC():boolean{
        return this._esHC;
    }*/

    static adapterLugarUso(data:EtiquetaDto):string{
        let r = [];
        if(data.esAgenda) r.push(EtiquetaDto.lugarUsos[0]);
        if(data.esCrm) r.push(EtiquetaDto.lugarUsos[1]);
        if(data.esHC) r.push(EtiquetaDto.lugarUsos[2]);
        return r.join(', ');
    }
}