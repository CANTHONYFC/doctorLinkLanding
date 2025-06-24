import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; // ← ESTE IMPORTANTE
import {MatDividerModule} from '@angular/material/divider';
import {LandingBlogComponent} from './blog.component';
import {landingBlogRoutes} from './blog.routing';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {Section1Component} from './section1/section1.component';
import {Section2Component} from './section2/section2.component';
import {NavMainModule} from "../nav-main/nav-main.module";
import {FooterMainModule} from "../footer-main/footer-main.module";


@NgModule({
    declarations: [
        LandingBlogComponent,
        NavComponent,
        FooterComponent,
        Section1Component,
        Section2Component
    ],
    imports: [
        RouterModule.forChild(landingBlogRoutes),
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
export class LandingBlogModule {
}
