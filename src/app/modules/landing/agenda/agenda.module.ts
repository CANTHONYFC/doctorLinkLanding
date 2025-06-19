import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; // ← ESTE IMPORTANTE
import {MatDividerModule} from '@angular/material/divider';

import {LandingAgendaComponent} from './agenda.component';
import {landingAgendaRoutes} from './agenda.routing';
import {Section2Component} from './section2/section2.component';
import {Section3Component} from './section3/section3.component';
import {Section4Component} from './section4/section4.component';
import {NavComponent} from './nav/nav.component';
import {Section1Component} from './section1/section1.component';
import {FooterComponent} from './footer/footer.component';
import {NavMainModule} from "../nav-main/nav-main.module";

@NgModule({
    declarations: [
        LandingAgendaComponent,
        Section1Component,

        Section2Component,
        Section3Component,
        Section4Component,
        NavComponent,
        FooterComponent
    ],
    imports: [
        RouterModule.forChild(landingAgendaRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        NavMainModule,
    ],
})
export class LandingAgendaModule {
}
