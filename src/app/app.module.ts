import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExtraOptions, PreloadAllModules, RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';
import {FuseModule} from '@fuse';
import {FuseConfigModule} from '@fuse/services/config';
import {FuseMockApiModule} from '@fuse/lib/mock-api';
import {CoreModule} from 'app/core/core.module';
import {appConfig} from 'app/core/config/app.config';
import {mockApiServices} from 'app/mock-api';
import {LayoutModule} from 'app/layout/layout.module';
import {AppComponent} from 'app/app.component';
import {appRoutes} from 'app/app.routing';
import {MatLegacyPaginatorIntl as MatPaginatorIntl} from '@angular/material/legacy-paginator';
import {MyCustomPaginatorIntl} from './shared/paginator/paginator.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {TranslocoModule, TranslocoService} from '@ngneat/transloco';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/moment';
import moment from 'moment';
import 'moment/locale/es'; // Solo si necesitas el español
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from 'app/core/auth/auth.interceptor';
import {FormsModule} from "@angular/forms";
import {MatLegacyButtonModule} from "@angular/material/legacy-button";
import {MatLegacyCardModule} from "@angular/material/legacy-card";
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule} from "@angular/material/legacy-input";
import {MatLegacyOptionModule} from "@angular/material/legacy-core";
import {MatLegacySelectModule} from "@angular/material/legacy-select";
import {MatLegacyTabsModule} from "@angular/material/legacy-tabs";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "./shared/shared.module";
import {FlexModule} from "@angular/flex-layout";
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { FloatingWhatsappButtonComponent } from './modules/landing/floating-whatsapp-button/floating-whatsapp-button.component';

moment.locale('es'); // Establece el idioma


export function momentAdapterFactory() {
    return adapterFactory(moment);
};

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        FloatingWhatsappButtonComponent
    ],
    imports: [
        TranslocoModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
        CalendarModule.forRoot({provide: DateAdapter, useFactory: momentAdapterFactory}),
        FormsModule,
        MatLegacyButtonModule,
        MatLegacyCardModule,
        MatLegacyFormFieldModule,
        MatLegacyInputModule,
        MatLegacyOptionModule,
        MatLegacySelectModule,
        MatLegacyTabsModule,
        MatTableModule,
        SharedModule,
        FlexModule,
        MatTabsModule,
        MatCardModule

    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl},
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        TranslocoService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
})
export class AppModule {
}
