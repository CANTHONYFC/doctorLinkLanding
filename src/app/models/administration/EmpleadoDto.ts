export class EmpleadoDto {

    id_especialidad: number = null;
    titulo: string = '';
    nroColegiatura: string = '';
    codigoRne: string = '';
    institucionTitulacion: string = '';
    urlFirma: string = '';
    comision: number = 0;
    descuento: number = 0;
    id_colegiatura: number =null;
    id_empleado: number =null;
    color: string = '#F1E7FF';

    constructor(data?: Partial<EmpleadoDto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
