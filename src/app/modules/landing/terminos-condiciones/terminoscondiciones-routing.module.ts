import {Route} from '@angular/router';
import {TerminoCondicionComponent} from "./termino-condicion/termino-condicion.component";
import {TerminosCondicionesAppComponent} from "./terminos-condiciones-app/terminos-condiciones-app.component";

export const TerminosCondicionesModuleRouting: Route[] = [
    {
        path: 'web',
        component: TerminoCondicionComponent
    },
    {
        path: 'app',
        component: TerminosCondicionesAppComponent
    }
];
