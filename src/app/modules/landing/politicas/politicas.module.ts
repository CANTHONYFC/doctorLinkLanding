import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; // ← ESTE IMPORTANTE
import { MatDividerModule } from '@angular/material/divider';

import { LandingPoliticasComponent } from './politicas.component';
import { landingPoliticasRoutes } from './politicas.routing';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        LandingPoliticasComponent,
        FooterComponent


    
    ],
    imports: [
        RouterModule.forChild(landingPoliticasRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
    ]
})
export class LandingPoliticasModule {
}
