import { getSelectedEmpresa } from 'app/shared/util/utils/Storage';
import moment from 'moment';
import 'moment/locale/es';  // Importar solo el locale español

moment.locale('es');  // Usar el locale español
export class EventoAgenda{
    id_persona : number = 0;
    nombre_completo : string = '';
    id_cliente : number = 0;
    id_cita : number = 0;
    id_especialidad : number = 0;
    horaDuracion : number = 0;
    minutosDuracion : number = 30;
    fechaInicio : string = moment().format('YYYY-MM-DD');
    horaInicio : string = '09:00';
    id_consultorio : number = 1;
    id_frecuencia : number = 1;
    validoHasta : string | null = null;
    estadoCitaMedica : number = 0;
    nota: string = '';

    //calendar
    id : string = '3be50686-e3a1-4f4b-aa4d-5cb8517ba4e4';
    calendarId : string = '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc';
    title: string = '';
    description: '';
    start : any = moment().hour(9).minute(0).second(0).millisecond(0).toISOString(); // Today 09:00
    end : any = moment().add(1, 'day').hour(14).minute(0).second(0).millisecond(0).toISOString(); // Tomorrow 14:00
    duration : null = null;
    allDay : boolean = false;
    recurrence : any = null;
    recurringEventId : any = null;
    isFirstInstance : boolean = false;

    id_empleado : number = 0;
    id_motivo : number = 0;

    fecha_registro : string | null = null;
    user_register : string | null = null;
    fecha_modifica : string | null = null;
    user_modifica : string | null = null;
    estado_reg : boolean = true;
    id_uneg : number = getSelectedEmpresa().idUneg;

    color: string = 'bg-teal-500';
    backgroundColor: string = '#378006';

    citaServicio:any[] = [];

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            if(data.id_cita) this.id = ''+data.id_cita;
            //if(data.id_cita) this.calendarId = ''+data.id_cita;
            if(data.id_cita) this.calendarId = ''+data.id_empleado;
            if(data.nombre_completo) this.title = data.nombre_completo;
            if(data.nota) this.description = data.nota;
            if(data.fechaInicio) this.start = moment(data.fechaInicio.split('T')[0]+' '+data.horaInicio).toISOString();
            if(data.horaDuracion !== undefined) this.end = moment(data.fechaInicio.split('T')[0]+' '+data.horaInicio).add(data.horaDuracion,'hour').add(data.minutosDuracion,'minute').toISOString();
        }
    }

    get durationText():string{
        return ('00'+this.horaDuracion).slice(-2) + 'h ' + ('00'+this.minutosDuracion).slice(-2)+'m';
    }

    get totalServicio(){
        let t = 0;
        this.citaServicio.forEach(e=>{
            t+=parseInt(e.precio);
        });
        return t;
    }

    calcTime(){
        let t = {
            h: 0,
            m: 0
        }
        this.citaServicio.forEach(e=>{
            t.h+=parseInt(e.duracionHora);
            t.m+=parseInt(e.duracionMinuto);
        });
        t.m = Math.ceil(t.m/30)*30;
        if(t.m > 59){
            t.h+= Math.floor(t.m/60);
            t.m = t.m - Math.floor(t.m/60)*60;
        }
        if(t.h == 0 && t.m == 0){
            t.m = 30;
        }
        if(t.h >= 12){
            t.h = 12;
            t.m = 0;
        }
        return t;
    }
}

