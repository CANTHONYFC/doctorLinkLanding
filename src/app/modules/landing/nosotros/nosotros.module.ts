import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; // ← ESTE IMPORTANTE
import {MatDividerModule} from '@angular/material/divider';
import {LandingNosotrosComponent} from './nosotros.component';
import {landingNosotrosRoutes} from './nosotros.routing';
import {NavComponent} from '../nosotros/nav/nav.component';
import {FooterComponent} from '../nosotros/footer/footer.component';
import {Section1Component} from './section1/section1.component';
import {Section10Component} from '../nosotros/section10/section10.component';
import {Section2Component} from './section2/section2.component';
import {Section3Component} from './section3/section3.component';
import {NavMainModule} from "../nav-main/nav-main.module";


@NgModule({
    declarations: [
        LandingNosotrosComponent,
        NavComponent,
        FooterComponent,
        Section1Component,
        Section2Component,
        Section10Component,
        Section2Component,
        Section3Component,
    ],
    imports: [
        RouterModule.forChild(landingNosotrosRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        NavMainModule,
    ]
})
export class LandingNosotrosModule {
}
