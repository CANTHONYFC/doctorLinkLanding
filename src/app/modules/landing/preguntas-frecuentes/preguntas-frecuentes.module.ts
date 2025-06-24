import {NgModule} from '@angular/core';
import {PreguntasComponent} from './preguntas/preguntas.component';
import {FooterMainModule} from "../footer-main/footer-main.module";
import {NavMainModule} from "../nav-main/nav-main.module";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {PreguntasFrecuentesModuleRouting} from "./preguntas-frecuentes-routing.module";
import { SolicitaDemoComponent } from './solicita-demo/solicita-demo.component';
import { LibroReclamacionComponent } from './libro-reclamacion/libro-reclamacion.component';

@NgModule({
    declarations: [
        PreguntasComponent,
        SolicitaDemoComponent,
        LibroReclamacionComponent
    ],
    imports: [
        RouterModule.forChild(PreguntasFrecuentesModuleRouting),
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
export class PreguntasFrecuentesModule {
}
