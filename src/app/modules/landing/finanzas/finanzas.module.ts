import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; // ← ESTE IMPORTANTE
import { MatDividerModule } from '@angular/material/divider';
import { LandingFinanzasComponent } from './finanzas.component';
import { landingFinanzasRoutes } from './finanzas.routing';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';


@NgModule({
    declarations: [
        LandingFinanzasComponent,
        NavComponent,
        FooterComponent,
        Section1Component,
        Section2Component,
        Section3Component,
     
    ],
    imports: [
        RouterModule.forChild(landingFinanzasRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
    ]
})
export class LandingFinanzasModule {
}
