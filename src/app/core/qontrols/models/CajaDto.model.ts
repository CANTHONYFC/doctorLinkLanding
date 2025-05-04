export class CajaDto {
    id_movimientoCaja: number;
    id_aperturaCaja: number;
    id_tipoCaja: number;
    id_tipoDocumento: number;
    id_Tipoingreso: number;
    id_TipoEgreso: number;
    monto: number;
    notaAdministrativa: string;
    nroFactura: string | null;
    concepto: string | null;
    id_medioPago: number;
    id_doctor: number;
    id_paciente: number;
    user_register: string;
    fecha_modifica: string; // ISO date string
    user_modifica: string;
    estado_reg: boolean;
    id_uneg: number;
    id_sucursal: number;
    fecha_registro: string; // ISO date string
    nombre_completo_paciente: string;
    nombre_completo_doctor: string;
    hora_minuto: string;
    tipoIngreso: string;
    descripcionIngreso: string;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
  }