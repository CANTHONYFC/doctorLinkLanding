export class CierreCajaDto {
    id_aperturaCaja?: number;
    id_uneg?: number;
    id_sucursal?: number;
    id_doctor?: number;
    fecha?: Date;
    usuarioApertura?: string;
    usuarioAperturaText?: string;
    usuarioCierreText?: string;
    fechaApertura?: Date;
    montoInicial?: number;
    fechaCierre?: Date;
    usuarioCierre?: string;
    estado?: number;
    monto_cierre?: number;
    abonoInicial?: number;
    totalIngresos?: number;
    totalEgresos?: number;
    abonoDiaSiguiente?: number=0;
    fecha_registro?: Date;
    listDistribucionIngreso?: DistribucionIngresosDto[];

    constructor(init?: Partial<CierreCajaDto>) {
        Object.assign(this, init);
    }
}

export class  DistribucionIngresosDto {
    nombre?: string;
    tipoIngreso?: number;
    monto?: string;
}
