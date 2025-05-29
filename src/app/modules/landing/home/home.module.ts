import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
import {LandingHomeComponent} from 'app/modules/landing/home/home.component';
import {landingHomeRoutes} from 'app/modules/landing/home/home.routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; // ← ESTE IMPORTANTE
import { MatDividerModule } from '@angular/material/divider';
import { NavComponent } from './nav/nav.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { FooterComponent } from './footer/footer.component';
import { Section10Component } from './section10/section10.component';
import { Section9Component } from './section9/section9.component';
import { Section8Component } from './section8/section8.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section7Component } from './section7/section7.component';
import { Section5Component } from './section5/section5.component';
import { Section5aComponent } from './section5a/section5a.component';
import { FidelizaComponent } from './fideliza/fideliza.component';

@NgModule({
    declarations: [
        LandingHomeComponent,
        NavComponent,
        Section1Component,
        Section2Component,
        FooterComponent,
        Section10Component,
        Section9Component,
        Section8Component,
        Section3Component,
        Section4Component,
        Section7Component,
        Section5Component,
        Section5aComponent,
        FidelizaComponent
    ],
    imports: [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
    ]
})
export class LandingHomeModule {
}
