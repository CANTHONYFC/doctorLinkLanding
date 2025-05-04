import { getSelectedEmpresa } from "app/shared/util/utils/Storage";

export class EmpresaProveedor{

    id_empresaProveedor: number = 1;
    razonSocial: string = '';
    id_tipoDocumento: number | null = 1;
    nroFiscal: string = '';
    direccion: string = '';
    fecha_registro: string | null = '2025-04-14';
    user_register: number | null = null;
    fecha_modifica: string | null = '2025-04-14';
    user_modifica: number | null = null;
    estado_reg: boolean = true;
    id_uneg: number = getSelectedEmpresa().idUneg;
    tipo_empresa_proveedor: number | null = 1;

    id_departamento: string = '';//'01';
    id_distrito: string = '';//'150503';
    id_provincia: string = '';//'0101';

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    toJSON(){
        return {
            ...this,
            idDistrito: this.id_distrito,
            idProvincia: this.id_provincia,
            userModifica: 'd69ddf16-0513-4700-ae6f-7c85d918c7c9',
            userRegister: 'd69ddf16-0513-4700-ae6f-7c85d918c7c9',
            idDepartamento: this.id_departamento,
            idTipoDocumento: this.id_tipoDocumento,
            idUneg: this.id_uneg,
            tipoEmpresaProveedor: this.tipo_empresa_proveedor
        }
    }
}