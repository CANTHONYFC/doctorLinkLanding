import {PersonaDto} from "./PersonaDto";

export class ParentescoDto{
    id_persona?: number;
    id_persona_pariente?: number;
    telefono?: string;
    falg_apoderado?: boolean;
    tipo_parentesco?: number;
    Persona?: PersonaDto;
}
