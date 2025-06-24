import {Route} from '@angular/router';
import {PreguntasComponent} from "./preguntas/preguntas.component";
import {LibroReclamacionComponent} from "./libro-reclamacion/libro-reclamacion.component";
import {SolicitaDemoComponent} from "./solicita-demo/solicita-demo.component";

export const PreguntasFrecuentesModuleRouting: Route[] = [
    {
        path: 'preguntas',
        component: PreguntasComponent
    },
    {
        path: 'libroReclamacion',
        component: LibroReclamacionComponent
    },
    {
        path: 'socitaDemo',
        component: SolicitaDemoComponent
    }
];
