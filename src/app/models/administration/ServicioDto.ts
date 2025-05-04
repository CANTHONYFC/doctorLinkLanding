export class ServicioDto {
    id_servicio: number;
    servicio: string;
    id_categoria: number;
    id_subCategoria: number;
    precio: number;
    capacidad: number;
    duracionHora: number;
    duracionMinuto: number;
    estado_reg: boolean;
    id_uneg: number | null;

    constructor(data?: Partial<ServicioDto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
