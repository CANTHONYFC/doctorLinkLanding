import {MovimientoCajaServicios} from "./MovimientoCajaServicios";
import {Cliente} from "./Cliente.model";
import {Empleado} from "./Empleado.model";
import {TipoIECajaDto} from "./tipoIECajaDto";
import { PagoCaja } from "./PagoCaja";

export class MovimientoCaja {
  id_uneg: number = 0;
  id_sucursal: number = 0;
  id_movimientoCaja: number = 0;
  id_aperturaCaja: number = 0;
  id_tipoCaja: number = null;
  id_tipoDocumento: number = null;
  id_Tipoingreso: number = null;
  id_TipoEgreso: number = 0;
  monto: number = 0;
  notaAdministrativa: string | null = null;
  nroFactura: string | null = null;
  concepto: string | null = null;
  id_medioPago: number = null;
  id_doctor: number = null;
  id_paciente: number = null;
  itemSelected: any;
  fecha_registro: Date | null = null;
  fecha_registroString: String | null = null;
  user_register: string | null = null;
  fecha_modifica: Date | null = null;
  user_modifica: string | null = null;
  estado_reg: boolean = true;

  movimientoCajaServicios: MovimientoCajaServicios[] = [];
  pagoCaja: PagoCaja[] = [];
  cliente: Cliente = new Cliente();
  tipo: TipoIECajaDto = new TipoIECajaDto();
  empleado: Empleado = new Empleado();

  constructor(init?: Partial<MovimientoCaja>) {
    Object.assign(this, init);
  }
    private static getFechaFormateadaActual(fecha:Date): string {

        return fecha.getFullYear() + '-' +
            String(fecha.getMonth() + 1).padStart(2, '0') + '-' +
            String(fecha.getDate()).padStart(2, '0') + 'T' +
            String(fecha.getHours()).padStart(2, '0') + ':' +
            String(fecha.getMinutes()).padStart(2, '0') + ':' +
            String(fecha.getSeconds()).padStart(2, '0');
    }
}
