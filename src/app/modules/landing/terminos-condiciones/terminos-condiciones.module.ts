import {NgModule} from '@angular/core';
import {TerminoCondicionComponent} from './termino-condicion/termino-condicion.component';
import {TerminosCondicionesModuleRouting} from "./terminoscondiciones-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {NavMainModule} from "../nav-main/nav-main.module";
import {FooterMainModule} from "../footer-main/footer-main.module";
import { TerminosCondicionesAppComponent } from './terminos-condiciones-app/terminos-condiciones-app.component';


@NgModule({
    declarations: [
        TerminoCondicionComponent,
        TerminosCondicionesAppComponent
    ],
    imports: [
        RouterModule.forChild(TerminosCondicionesModuleRouting),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        NavMainModule,
        FooterMainModule,
    ]
})
export class TerminosCondicionesModule {
}

