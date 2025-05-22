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
import { LandingHclinicaComponent } from './hclinica.component';
import { landingHclinicaRoutes } from './hclinicia.routing';
import { NavComponent } from './nav/nav.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { FooterComponent } from './footer/footer.component';
import { Section3Component } from './section3/section3.component';


@NgModule({
    declarations: [
        LandingHclinicaComponent,
        NavComponent,
        Section1Component,
        Section2Component,
        FooterComponent,
        Section3Component,


    ],
    imports: [
        RouterModule.forChild(landingHclinicaRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
    ]
})
export class LandingHclinicaModule {
}
