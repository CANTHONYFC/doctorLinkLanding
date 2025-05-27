import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from 'app/shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; // ← ESTE IMPORTANTE
import { MatDividerModule } from '@angular/material/divider';

import { landingPagosRoutes } from './pagos.routing';
import { LandingPagosComponent } from './pagos.component';
import { PasarelaComponent } from './pasarela/pasarela.component';


@NgModule({
    declarations: [
        LandingPagosComponent,
        PasarelaComponent,


    
    ],
    imports: [
        RouterModule.forChild(landingPagosRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
    ]
})
export class LandingPagosModule {
}
