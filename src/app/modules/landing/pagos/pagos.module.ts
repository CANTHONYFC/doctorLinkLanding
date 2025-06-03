import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

import {landingPagosRoutes} from './pagos.routing';
import {LandingPagosComponent} from './pagos.component';
import {PasarelaComponent} from './pasarela/pasarela.component';
import {FuseCardModule} from '@fuse/components/card';
import {SharedModule} from 'app/shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {ButtonCardModule} from 'app/shared/button.card/button.card.module';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {FlexModule} from '@angular/flex-layout';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableResponsiveModule} from 'app/shared/mat-table-responsive/mat-table-responsive.module';
//import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {NgxCleaveDirectiveModule} from 'ngx-cleave-directive';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatLegacyCardModule} from "@angular/material/legacy-card";
import {MatRippleModule} from '@angular/material/core';

import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';

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
        SharedModule,
        ButtonCardModule,
        MatChipsModule,
        MatLegacyCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule,
        FlexModule,
        MatTabsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatAutocompleteModule,
        FuseCardModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatSidenavModule,
        MatTableResponsiveModule,
        MatRippleModule,
        MatCheckboxModule,
        ZXingScannerModule,
        MatListModule,
        MatButtonToggleModule,
        NgxCleaveDirectiveModule,
        DragDropModule,


    ]
})
export class LandingPagosModule {
}
