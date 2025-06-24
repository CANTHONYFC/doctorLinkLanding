import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; // ← ESTE IMPORTANTE
import {MatDividerModule} from '@angular/material/divider';
import {LandingPreciosComponent} from './precios.component';
import {NavComponent} from './nav/nav.component';
import {landingPreciosRoutes} from './precios.routing';
import {FooterComponent} from './footer/footer.component';
import {Section9Component} from './section9/section9.component';
import {PfrecuentesComponent} from './pfrecuentes/pfrecuentes.component';
import {NavMainModule} from "../nav-main/nav-main.module";
import {FooterMainModule} from "../footer-main/footer-main.module";


@NgModule({
    declarations: [
        LandingPreciosComponent,
        NavComponent,
        FooterComponent,
        Section9Component,
        PfrecuentesComponent,

    ],
    imports: [
        RouterModule.forChild(landingPreciosRoutes),
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
export class LandingPreciosModule {
}
