export class MostrarDatosDto {
    etiquetas?: MostrarEtiquetaClienteDto[] = [];
    nota?: MostrarNotaDto;
    alergia?: MostrarAlergiaDto;
    cliente?: MostrarDatosClienteDto;
    fiscal?: MostrarDatosFiscalesDto[];
}

export class MostrarEtiquetaClienteDto {
    id_etiqueta?: number;
    etiqueta?: string;
    estado_reg_etiqueta?: boolean;
    flagNuevoEtiqueta?: boolean;
}

export class MostrarNotaDto {
    id_notaCliente?: number;
    notaDescripcion?: string;
}

export class MostrarAlergiaDto {
    id_alergiaCliente?: number;
    alergiasText?: string;
}

export class MostrarDatosClienteDto {
    id_cliente?: number;
    id_persona?: number;
    nombre?: string;
    apellido_paterno?: string;
    apellido_materno?: string;
    id_tipoDocumento?: number;
    dni?: string;
    fecha_nacimiento?: string;
    email?: string;
    telefono?: string;
    telefono_pais?: string;
    falg_telefono?: boolean;
}

export class MostrarDatosFiscalesDto {
    id_datos_fiscales?: number;
    razon_social?: string;
    direccion?: string;
    id_departamento?: number;
    id_provincia?: number;
    id_distrito?: number;

}
