import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; // ← ESTE IMPORTANTE
import {MatDividerModule} from '@angular/material/divider';
import {landingContactanosRoutes} from './contactanos.routing';

import {LandingContactanosComponent} from './contactanos.component';
import {NavComponent} from './nav/nav.component';
import {Section1Component} from './section1/section1.component';
import {FooterComponent} from './footer/footer.component';
import {NavMainModule} from "../nav-main/nav-main.module";


@NgModule({
    declarations: [
        LandingContactanosComponent,

        NavComponent,
        Section1Component,
        FooterComponent
    ],
    imports: [
        RouterModule.forChild(landingContactanosRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        NavMainModule,
    ]
})
export class LandingContactanosModule {
}
