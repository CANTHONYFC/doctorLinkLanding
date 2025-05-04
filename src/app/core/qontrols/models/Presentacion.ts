export class Presentacion {
    id_presentacion: number = 0;
    nombrepresentacion: string = "";
    isEntero: boolean | null = null;
    isDecimal: boolean | null = null;
    fecha_registro: Date | null = null;
    user_register: string | null = null;
    fecha_modifica: Date | null = null;
    user_modifica: string | null = null;
    estado_reg: boolean = true;
    id_uneg: number | null = null;

    constructor(init?: Partial<Presentacion>) {
        Object.assign(this, init);
        //
        // // Parsear fechas si vienen como string
        // if (init?.fecha_registro && typeof init.fecha_registro === 'string') {
        //     this.fecha_registro = new Date(init.fecha_registro);
        // }
        //
        // if (init?.fecha_modifica && typeof init.fecha_modifica === 'string') {
        //     this.fecha_modifica = new Date(init.fecha_modifica);
        // }
    }
}
