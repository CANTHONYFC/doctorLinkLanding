export class Productos
{
    id_producto: number;
    id_uneg?: number;
    correlativoProducto?: string;
    id_tipo?: number;
    id_presentacion?: number;
    nombrepresentacion?: string;
    id_categoriaProducto?: number;
    unidadAlerta?: number;
    isCapacidadDosis?: boolean;
    cantidadAplicaciones?: number;
    idAplicacion?: number;
    comentario?: string;
    precioUnit?: number;
    fecha_vencimiento?: string; // Se maneja como string en Angular (ISO date)
    nombre?: string='';
    estado_reg?: boolean;
    id_almacen?: number;

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
