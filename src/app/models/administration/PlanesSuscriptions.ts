export class PlanesSuscriptions {

    id_planesSuscriptions: number;
    nombre: string;
    descripcion?: string | null;

    precioMensual: number;
    precioMensualOferta: number;
    precioTotal: number;

    nroEmpleados: number;
    nroPacientes: number;

    flagMarketing: boolean;
    flagAgenta: boolean;
    flagActualizaciones: boolean;
    flagSoporteArchivos: boolean;
    flagOferta: boolean;
    flagPacienteIlimitados: boolean;

    nroRecordatorios: number;
    flagAppMovil: boolean;
    flagInventario: boolean;
    flagSoporte: boolean;

    duracionMeses: number;
    paypalPlanId?: string | null;

    estado_reg: boolean;

    fechaCreacion: string;  // En TS usualmente fechas vienen como string ISO

    flagPrueba: boolean;
    flagPopular: boolean;

    interval_unit: string;
    flagMostrar: boolean;

    id_productoGeneralPlan: number;

    constructor(data?: Partial<PlanesSuscriptions>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
