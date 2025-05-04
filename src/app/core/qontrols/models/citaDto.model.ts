import { getSelectedEmpresa } from "app/shared/util/utils/Storage";
import { EventoAgenda } from "./EventoAgenda.model";

export class CitaDto{
    cita: EventoAgenda = new EventoAgenda();
    citaServicio: any[] = [];
    id_uneg: number = getSelectedEmpresa().idUneg;

    constructor(){

    }

    static fromEvent(event:EventoAgenda){
        let cita = new CitaDto();
        cita.cita = event;
        cita.citaServicio = event.citaServicio || [];
        return cita;  
    }
}